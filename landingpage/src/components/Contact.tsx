import React, { useState } from "react";

// Komponen utama Contact
const Contact: React.FC = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State untuk menyimpan status pesan (sukses atau error)
  const [status, setStatus] = useState<string | null>(null);

  // State untuk menyimpan pesan error validasi
  const [error, setError] = useState<string | null>(null);

  // State untuk menandai loading ketika permintaan sedang diproses
  const [loading, setLoading] = useState(false);

  // Fungsi untuk menangani perubahan nilai input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target; // Ambil nama dan nilai input
    setFormData((prevData) => ({
      ...prevData, // Salin data form sebelumnya
      [name]: value, // Perbarui nilai field yang sesuai
    }));
  };

  // Fungsi untuk memvalidasi input form sebelum dikirim
  const validateForm = () => {
    // Periksa apakah semua field terisi
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError("Semua field harus diisi."); // Beri pesan error jika ada field kosong
      return false;
    }
    // Periksa apakah email memiliki format yang valid
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Email tidak valid."); // Beri pesan error jika email tidak valid
      return false;
    }
    setError(null); // Bersihkan pesan error jika validasi lolos
    return true;
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Mencegah refresh halaman saat form dikirim

    if (!validateForm()) return; // Hentikan proses jika validasi gagal

    setLoading(true); // Tampilkan status loading
    setStatus(null); // Bersihkan status sebelumnya
    setError(null); // Bersihkan error sebelumnya

    try {
      // Kirim data ke backend menggunakan fetch
      const response = await fetch("http://127.0.0.1/contact-api/contact.php", {
        method: "POST", // Metode HTTP POST untuk mengirim data
        headers: {
          "Content-Type": "application/json", // Header untuk JSON
        },
        body: JSON.stringify(formData), // Konversi data form menjadi JSON
      });

      if (!response.ok) {
        // Jika respons gagal, lempar error
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json(); // Ambil respons dari backend

      setStatus("Pesan berhasil dikirim!"); // Tampilkan pesan sukses
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (err) {
      console.error("Fetch error:", err); // Log error ke konsol
      setError("Terjadi kesalahan koneksi. Pastikan backend berjalan."); // Tampilkan pesan error
    } finally {
      setLoading(false); // Hentikan status loading
    }
  };

  // Render form dan status
  return (
    <div className="container">
      {/* Container untuk form */}
      <div className="w-full px-4">
        {/* Header form */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <h4 className="font-semibold text-lg text-primary mb-2">Kontak</h4>
          <h2 className="font-bold text-dark text-3xl mb-4">Hubungi Kami</h2>
          <p className="font-medium text-md text-secondary">
            Silakan isi form di bawah untuk menghubungi kami.
          </p>
        </div>
        {/* Form */}
        <div className="w-full lg:w-2/3 lg:mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Field input nama */}
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="name"
                className="text-base text-primary font-bold"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name" // Nama field sesuai dengan state
                value={formData.name} // Data diambil dari state
                onChange={handleChange} // Tangani perubahan input
                className="mt-1 w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none"
              />
            </div>
            {/* Field input email */}
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="email"
                className="text-base text-primary font-bold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none"
              />
            </div>
            {/* Field input pesan */}
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="message"
                className="text-base text-primary font-bold"
              >
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-32 mt-1 w-full bg-slate-100 text-dark p-3 rounded-md focus:outline-none"
              />
            </div>
            {/* Tombol Kirim */}
            <div className="w-full">
              <button
                type="submit"
                className="text-base font-semibold text-white bg-primary px-8 py-4 rounded-full w-full hover:opacity-80 hover:shadow-lg"
                disabled={loading} // Tombol dinonaktifkan saat loading
              >
                {loading ? "Mengirim..." : "Kirim"}{" "}
                {/* Tampilkan status loading */}
              </button>
            </div>
          </form>
          {/* Pesan error */}
          {error && (
            <p className="mt-4 text-center text-sm text-red-500">{error}</p>
          )}
          {/* Pesan sukses */}
          {status && (
            <p className="mt-4 text-center text-sm text-green-500">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

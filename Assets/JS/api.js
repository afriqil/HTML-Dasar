// URL endpoint API untuk menambahkan data
const apiUrl =
  'https://crudcrud.com/api/5437464e83384303a6ec50631cb91fb6/product';

// Fungsi untuk mengambil data dari API
fetch(apiUrl)
  .then((response) => {
    // Periksa apakah responsenya sukses (status kode 200)
    if (!response.ok) {
      throw new Error('Gagal mengambil data produk');
    }
    // Ubah responsenya ke dalam format JSON
    return response.json();
  })
  .then((data) => {
    // Data produk berhasil diambil
    console.log('Data Produk:', data);

    // Sekarang Anda dapat melakukan apa pun dengan data produk, seperti menampilkannya di halaman web
  })
  .catch((error) => {
    // Penanganan kesalahan jika terjadi masalah saat mengambil data dari API
    console.error('Error:', error);
  });


// URL endpoint API untuk menambahkan data
const apiUrl = 'https://crudcrud.com/api/5437464e83384303a6ec50631cb91fb6';

// Data yang akan Anda tambahkan ke API
const newData = {
  name: 'Big Burger',
  description: 'roti yang ditengahnya ada daging',
  price: 'Rp 100.000',
};

// Konfigurasi permintaan HTTP POST
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newData),
};

// Kirim permintaan POST ke API
fetch(apiUrl, requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Gagal menambahkan data');
    }
    return response.json();
  })
  .then((data) => {
    console.log('Data berhasil ditambahkan:', data);
    // Anda dapat melakukan tindakan lain setelah data berhasil ditambahkan
  })
  .catch((error) => {
    console.error('Error:', error);
  });

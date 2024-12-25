<<<<<<< HEAD
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../Style/Product.css';
import HeroImg from '../assets/Jual.png'; 
import MapImg from '../assets/wm.png'; 

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    country: '',
    paymentMethod: '',
    purchasedItem:'Buah Strawberry 1 Pack',
  });

 const handleQuantityChange = (e) => { 
  const value = e.target.value; if (value.length <= 4) { setQuantity(parseInt(value)); }};

  const addToCart = () => {
    setCartQuantity(cartQuantity + quantity);
    Swal.fire('Berhasil', 'Produk berhasil ditambahkan ke keranjang!', 'success');
  };

  const handlePurchase = () => {
    setShowPurchaseForm(true);
  };

  const handleCloseForm = () => {
    setShowPurchaseForm(false);
    setShowSummary(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowPurchaseForm(false);
    setShowSummary(true);
  };

  const handleConfirmPurchase = () => {
    setShowSummary(false);
    Swal.fire('Pembelian berhasil!', 'Pesanan Anda telah diterima.', 'success');
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    
    <div data-aos="fade-up" data-aos-duration="300" className="container">
      
      <div className="header">
        <h1 data-aos="zoom-in" data-aos-duration="400" className="text-3xl font-bold text-white bg-primaryDark rounded-[10px]">STRAWBERRY</h1>
      </div>
      <div className="habitat-info flex flex-col md:flex-row items-start mt-4 mb-6">
        <img src={MapImg} alt="World Map" className="w-60 h-40 mr-6 mb-4 md:mb-0" />
        <div className="info-text text-md">
          <h2 data-aos="zoom-in" data-aos-duration="500" className="text-2xl font-bold mb-2 text-secondary">Habitat Alami Strawberry</h2>
          <p data-aos="fade-left" data-aos-duration="600">
            Strawberry tumbuh dengan baik di daerah beriklim sedang dan dingin. Tanaman ini memerlukan tanah yang subur, banyak sinar matahari, dan cukup air untuk tumbuh dengan optimal. Biasanya, strawberry ditanam di daerah dengan iklim yang sejuk dan suhu yang konsisten sepanjang tahun. Mereka juga membutuhkan perawatan yang baik, termasuk pemangkasan dan pengendalian hama secara teratur untuk memastikan pertumbuhan yang sehat. 
          </p>
          <p data-aos="fade-left" data-aos-duration="600">
            Habitat alami strawberry meliputi lahan pertanian di pegunungan, lembah, dan beberapa daerah perkebunan. Selain itu, strawberry juga sering ditemukan di kebun rumah tangga yang memiliki kondisi tanah dan iklim yang sesuai. Dengan perawatan yang tepat, tanaman strawberry bisa menghasilkan buah yang berlimpah dan berkualitas tinggi.
          </p>
        </div>
      </div>
      <div  data-aos="zoom-in" data-aos-duration="500" className="product mt-6">
        <img src={HeroImg} alt="Strawberry Pack" className="w-40 h-40 md:w-60 md:h-60" />
        <div className="product-details">
          <h1 className="text-secondary">BUAH STRAWBERRY | STRAWBERRY SEGAR 1 PACK</h1>
          <div className="rating">
            <span>★★★★☆</span> 4.8 (57 Penilaian)
          </div>
          <div className="price">Rp19.500</div>
          <div className="quantity">
            <label htmlFor="quantity">Kuantitas: </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
              max="1000"
            />
          </div>
          <div className="buttons">
            <button onClick={addToCart}>Masukkan Keranjang</button>
            <button onClick={handlePurchase}>Beli Sekarang</button>
          </div>
        </div>
      </div>

      {showPurchaseForm && (
        <div className="modal" onClick={handleCloseForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Formulir Pembelian</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nama:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleFormChange} 
                  pattern="[A-Za-z\s]*" 
                  title="Nama harus berisi huruf saja." 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Alamat:</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleFormChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Nomor Telepon:</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleFormChange} 
                  pattern="[0-9]{10,13}" 
                  title="Nomor telepon harus terdiri dari 10-13 angka." 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Negara:</label>
                <select id="country" name="country" value={formData.country} onChange={handleFormChange} required>
                  <option value="">Pilih Negara</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Japan">Japan</option>
                  <option value="South Korea">South Korea</option>
                  <option value="China">China</option>
                  <option value="India">India</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="paymentMethod">Metode Pembayaran:</label>
                <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleFormChange} required>
                  <option value="transfer">Transfer Bank</option>
                  <option value="credit-card">Kartu Kredit</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>
              <div className="form-group">
                <label>Total Harga:</label>
                <p>Rp{(quantity * 19500).toLocaleString()}</p>
              </div>
              <button type="submit" className="submit-button">Lanjutkan</button>
            </form>
          </div>
        </div>
      )}

      {showSummary && (
        <div className="modal" onClick={handleCloseForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Ringkasan Pembelian</h2>
            <p>Nama: {formData.name}</p>
            <p>Alamat: {formData.address}</p>
            <p>Nomor Telepon: {formData.phone}</p>
            <p>Negara: {formData.country}</p>
            <p>Metode Pembayaran: {formData.paymentMethod}</p>
            <p>Barang Yang Dibeli; {formData.purchasedItem}</p>
            <p>Total Harga: Rp{(quantity * 19500 + 3000).toLocaleString()}</p>
            <button onClick={handleConfirmPurchase} className="confirm-button">Konfirmasi Pembelian</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
=======
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import '../Style/Product.css';
import HeroImg from '../assets/Jual.png'; 
import MapImg from '../assets/wm.png'; 

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    country: '',
    paymentMethod: 'transfer',
  });

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const addToCart = () => {
    setCartQuantity(cartQuantity + quantity);
    Swal.fire('Berhasil', 'Produk berhasil ditambahkan ke keranjang!', 'success');
  };

  const handlePurchase = () => {
    setShowPurchaseForm(true);
  };

  const handleCloseForm = () => {
    setShowPurchaseForm(false);
    setShowSummary(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowPurchaseForm(false);
    setShowSummary(true);
  };

  const handleConfirmPurchase = () => {
    setShowSummary(false);
    Swal.fire('Pembelian berhasil!', 'Pesanan Anda telah diterima.', 'success');
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    
    <div data-aos="fade-up" data-aos-duration="300" className="container">
      
      <div className="header">
        <h1 className="text-3xl font-bold text-white bg-primaryDark rounded-[10px]">STRAWBERRY</h1>
      </div>
      <div className="habitat-info flex flex-col md:flex-row items-start mt-4 mb-6">
        <img src={MapImg} alt="World Map" className="w-60 h-40 mr-6 mb-4 md:mb-0" />
        <div className="info-text text-md">
          <h2 className="text-2xl font-bold mb-2 text-secondary">Habitat Alami Strawberry</h2>
          <p>
            Strawberry tumbuh dengan baik di daerah beriklim sedang dan dingin. Tanaman ini memerlukan tanah yang subur, banyak sinar matahari, dan cukup air untuk tumbuh dengan optimal. Biasanya, strawberry ditanam di daerah dengan iklim yang sejuk dan suhu yang konsisten sepanjang tahun. Mereka juga membutuhkan perawatan yang baik, termasuk pemangkasan dan pengendalian hama secara teratur untuk memastikan pertumbuhan yang sehat. 
          </p>
          <p>
            Habitat alami strawberry meliputi lahan pertanian di pegunungan, lembah, dan beberapa daerah perkebunan. Selain itu, strawberry juga sering ditemukan di kebun rumah tangga yang memiliki kondisi tanah dan iklim yang sesuai. Dengan perawatan yang tepat, tanaman strawberry bisa menghasilkan buah yang berlimpah dan berkualitas tinggi.
          </p>
        </div>
      </div>
      <div className="product mt-6">
        <img src={HeroImg} alt="Strawberry Pack" className="w-40 h-40 md:w-60 md:h-60" />
        <div className="product-details">
          <h1 className="text-secondary">BUAH STRAWBERRY | STRAWBERRY SEGAR 1 PACK</h1>
          <div className="rating">
            <span>★★★★☆</span> 4.8 (20 Penilaian)
          </div>
          <div className="price">Rp19.500</div>
          <div className="quantity">
            <label htmlFor="quantity">Kuantitas: </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
            />
          </div>
          <div className="buttons">
            <button onClick={addToCart}>Masukkan Keranjang</button>
            <button onClick={handlePurchase}>Beli Sekarang</button>
          </div>
        </div>
      </div>

      {showPurchaseForm && (
        <div className="modal" onClick={handleCloseForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Formulir Pembelian</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nama:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleFormChange} 
                  pattern="[A-Za-z\s]*" 
                  title="Nama harus berisi huruf saja." 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Alamat:</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleFormChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Nomor Telepon:</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleFormChange} 
                  pattern="[0-9]{10,13}" 
                  title="Nomor telepon harus terdiri dari 10-13 angka." 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Negara:</label>
                <select id="country" name="country" value={formData.country} onChange={handleFormChange} required>
                  <option value="">Pilih Negara</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Japan">Japan</option>
                  <option value="South Korea">South Korea</option>
                  <option value="China">China</option>
                  <option value="India">India</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="paymentMethod">Metode Pembayaran:</label>
                <select id="paymentMethod" name="paymentMethod" value={formData.paymentMethod} onChange={handleFormChange} required>
                  <option value="transfer">Transfer Bank</option>
                  <option value="credit-card">Kartu Kredit</option>
                  <option value="paypal">PayPal</option>
                  <option value="cod">Cash on Delivery</option>
                </select>
              </div>
              <div className="form-group">
                <label>Total Harga:</label>
                <p>Rp{(quantity * 19500).toLocaleString()}</p>
              </div>
              <button type="submit" className="submit-button">Lanjutkan</button>
            </form>
          </div>
        </div>
      )}

      {showSummary && (
        <div className="modal" onClick={handleCloseForm}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4">Ringkasan Pembelian</h2>
            <p>Nama: {formData.name}</p>
            <p>Alamat: {formData.address}</p>
            <p>Nomor Telepon: {formData.phone}</p>
            <p>Negara: {formData.country}</p>
            <p>Metode Pembayaran: {formData.paymentMethod}</p>
            <p>Total Harga: Rp{(quantity * 19500).toLocaleString()}</p>
            <button onClick={handleConfirmPurchase} className="confirm-button">Konfirmasi Pembelian</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
>>>>>>> f73c80a6dc70369b667aca6ee6538a44c968a5c7

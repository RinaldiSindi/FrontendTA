import FaqList from "./faq-list";

/* eslint-disable react/no-unescaped-entities */
const FaqSection = () => {

  const faqs = [
    {
      question: "Apa itu Togetherboost?",
      answer: "Togetherboost merupakan sebuah platform yang didedikasikan untuk menyediakan informasi tentang berbagai bantuan akses belajar. Kami adalah sumber yang dapat diandalkan bagi mereka yang memberikan informasi atau mencari bantuan untuk mengakses pendidikan, mulai dari beasiswa hingga sumber daya belajar online."
    },
    {
      question: "Bagaimana cara membuat akun?",
      answer: 'Silahkan klik tombol gabung terlebih dahulu. Ketika sudah memasuki halaman selanjutnya, anda dapat mengklik Daftar Sekarang lalu isi dan ikuti perintah yang ada.'
    },
    {
      question: "Bagaimana cara melakukan share informasi?",
      answer: 'Silahkan login terlebih dahulu. Ketika sudah memasuki halaman utama, anda dapat melihat tombol "Buat Postingan". Anda dapat mengklik tombol tersebut untuk membuat postingan informasi bantuan pendidikan. Silahkan isi form yang tersedia, dan klik tombol "Posting" untuk menyelesaikan proses pembuatan posting informasi.'
    },
    {
      question: "Apa saja yang dapat saya posting?",
      answer: "Anda dapat melakukan share informasi berupa voucher belajar, informasi beasiswa, ataupun properti digital yang dapat berguna dalam hal pendidikan dan pengembangan diri. Hal yang dapat anda donasikan antara lain link buku bacaan atau modul, online course gratis, dan lain-lain."
    }
  ]

  const renderFaqList = faqs.map((faq, index) => <FaqList key={index} question={faq.question} answer={faq.answer}/>);

  return (
    <div className="flow-root">
      <div className="-my-8 divide-y divide-gray-100">
        {renderFaqList}
      </div>
    </div>
  );
};

export default FaqSection;

import { BsLinkedin, BsInstagram } from "react-icons/bs";

const AboutPage = () => {
  return (
    <>
      <section className="mt-2 lg:mt-8">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-0">
          <div className="max-w-6xl">
            <h1 className="text-3xl font-extrabold py-2 sm:text-4xl">
              Togetherboost hadir dengan tujuan mendorong inklusifitas dalam
              pendidikan
            </h1>

            <p className="mt-4 sm:text-lg/relaxed text-slate-700">
              Meskipun pendidikan dianggap sebagai hak universal, masih banyak yang sulit mengaksesnya terutama sumber belajar berbayar karena
              faktor finansial, sosial, dan lainnya. Setiap orang berhak belajar tanpa batasan apapun.
            </p>

            <p className="mt-4 sm:text-lg/relaxed text-slate-700">
            Togetherboost berkomitmen untuk memajukan dunia pendidikan dengan menyediakan informasi yang akurat, terpercaya, dan mudah diakses. Kami percaya bahwa setiap orang memiliki hak untuk mendapatkan pendidikan yang berkualitas, dan melalui platform kami, kami berupaya memberikan akses yang lebih mudah dan terjangkau bagi semua kalangan.
            </p>

           
            <br></br>
            <br></br>
            <div className="mt-6">
              <h2 className="text-2xl font-bold">Kutipan Inspiratif</h2>
              <blockquote className="mt-4 p-4 border-l-4 border-slate-700 italic text-slate-700">
              "Pendidikan bukanlah belajar fakta, tetapi melatih pikiran untuk berpikir."
                <cite className="mt-2 block not-italic font-semibold">- Albert Einstein</cite>
              </blockquote>

              <div className="mt-6 flex space-x-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <BsLinkedin size={24} className="text-slate-700 hover:text-slate-900" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <BsInstagram size={24} className="text-slate-700 hover:text-slate-900" />
              </a>
            </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

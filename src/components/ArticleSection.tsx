import Banner from '../assets/img/Banner.jpg'

export default function ArticleSection() {
  return (
    <>
      <div className="mt-16">
        <div className="container flex flex-col md:flex-row items-center md:items-start bg-white p-4">
          <img src={Banner} alt="Company" className="w-[600px]  h-auto" />
          <div className="md:ml-8 mt-4 md:mt-0 md:w-1/2">
            <h2 className="text-xl font-bold mb-4">Zhejiang Chunli Tea Industry Co., Ltd</h2>
            <p className="text-gray-700 mb-2">
              Was set up in 1993 in Zhejiang province, China, with more than 300 employees and with
              a registered fund of 50 million yuan. Chunli also owns over 8 thousand square meters
              office building, 65 thousand square meters factory building and 23 million square
              meters tea garden. We are one of the famous and main enterprises in Zhejiang province,
              who focus on the tea product import and export business. Is a leading tea export
              company with an impressive volume of 35,000 tons annually. Our client base extends to
              most African and Central Asian countries, including Algeria, Mauritania, Senegal, as
              well as Russia, Europe, and the United States. Our company is renowned for
              high-quality tea production and has won the appreciation and loyalty of clients due to
              our strong production capacity and strict quality control measures.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

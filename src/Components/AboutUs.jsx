import Navbar from "./NavBar";
import Footer from "./Footer";

export const AboutUs = () => {
  const aboutCompany = [
    {
      imageUrl: 'https://s3-alpha-sig.figma.com/img/9e6f/cfb6/d4598c28ba3eac74c1a69ba264c73f85?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jO~bNYbCPfJbH3HBjqPI~PCCAmzzgJS4pR5LPepL2nHL9f79DFhw8As8qHYpBWecV89ruILdYclSKL9lvYhbhU2ZlWUVJ1Rr6UpypmMHPRueRmDOzitlOaLpCJDg5CVQ3m0WBaOpjvXCqsF7pIOfPHWgXb6QSHvCoMNWlQmZqfPswwfUisaY8-tLG3zwh91MvUM6PUzxFN~X10QndTQ28QAq9Uwf9WK6BGwXIhSP06Rb-d4oL6Slg1jwCLNm6D3o66CxQB3zfdVYyQ2f8lPRSZ88aeww3l3KM7x4pxanO~q~vsHazV7mLrWGDoCYaDsdiRIsKTVq0vs7FLZKw5250A__',
      description: 'Our carefully selected services are designed to cater for clients for all kinds of businesses and help their business achieve greater heights in terms of all aspects. Everest offers customized solutions, based on the expectations of our clients and the product will be delivered with high quality at a cost-effective rate and at the specified timeline. We have the commitment, competitiveness and strong growth as the base so we provide varied improvements in the products and services. ',
    },
    {
      imageUrl: 'https://s3-alpha-sig.figma.com/img/0293/0e75/b688f4162d7bf29a8a81c402cec11541?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HPloAC5E4x9qGaR7r5QhSyef0HktL04GCyIPWqVB8jaWYnDrKJ7nJ~PFbmPMHqBb5oBKdIH8m2uLyiMhSau4lduafMxm4-Pr2~HVIMlwzj89gUoXYbCLgXeVFk26A3AI-rdnl4pQPAaZgveqa6jCI1gGRBwaWtDJpviWyyQC40A7tteZ-5tOzwKQkU5DTTNyD3JBSzTeXOhl2vzDKJ0UcME0WQXj5lVoE9a9LihSKdjgK8i4mKA88GYkLisiH3mc6QgdmJBfGrl5bmiz64OaDvc1NyhNtnym8dqAGtgPY860UgqmBep7m22uTIvGawtdULFLhAoVGW0Wdc2LYs3j9w__',
      description: 'Everest is equipped with fine infrastructure and ideal technology support together with a broader distribution network so that the business requirements of our clients are been satisfied. The dealing with every client is being valued by the company, which completely go through the demands and we deliver it accordingly. With the opening of newer horizons, the company is still able to maintain its reputed position in the market.',
    },
    {
      imageUrl: 'https://s3-alpha-sig.figma.com/img/51bd/064f/d66bc3c4b29ef4955214f8d5e824fef4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Es~B0Q90HRP2wHJPHgfzTr82y0WynRl2-HMSyX39IO4CARE3dJZRZzNHcEgQquniF-1bU0~ndzA6ImHxPFsNqeKc1sKmr1gCUQb2BCRgbdzjNQ9ZOJa4W6M1yLYJB-edsrQQTR5Dn0BxYBo9r4U09WDXIhKvctzhftPaMYjy8z5sdgwxEm5lkn4dvfDW98mLiWiBCaI9NDu-A4YI03tcKV~vC35KXpt3fVkxAX-itrWC-Ki31nQxN4UYRwhxwE0Pd6d8Ko68AkygGIj18qYtw7w8pO3RbeP5JizBhAHmYiFlD7l28PIR7EGFD687ZA-X3lsxsp8XkY~91eS5rfV5~g__',
      description: 'We’re a company led by proper and leaders which helps us achieve greater heights. The highly motivated team experts will mainly focus on fulfilling the necessities of the company’s principles. Innovation, commitment, quality and superior service help to determine the ways to reach profitable growth. Our brand Everest was inspired by the all mighty Mt Everest – the highest peak in the world! We thrive to be a leading IT services provider in the Middle East region and globally. The Philosophy behind our company name motivates us to reach the highest point in the world both in terms of business and our services for our clients. ',
    },
  ];

  const styles = {
    card: {

    },
    img: {
      maxWidth: '535px',
      height: '278px',
      // margin: '20px',
    },
    description: {
      fontSize: "1em"
    },
  };

  return (
    <div>
      <Navbar backgroundColor={"#152E3A"} />
      <div className="card bg-dark text-white flex img-fluid">
        <div className="card-img-overlay align-self-end">
          <h5 className="card-title fs-1">About Company</h5>
        </div>
      </div>
      {/* text below image */}
      <div className="container mt-4 bg-white">
        <div className="container text-wrap">
          Our brand Everest was inspired by the all mighty Mt Everest – the
          highest peak in the world! We thrive to be a leading IT services
          provider in the Middle East region and globally. The Philosophy behind
          our company name motivates us to reach the highest point in the world
          both in terms of business and our services for our clients.
        </div>
        <div className="card mb-3 border-none container mt-5 bg-white">
          <div className="row ">
            {aboutCompany.map((company, index) => (
              <div className="mt-5" key={index}>
                <div className="row justify-content-center align-items-center" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                  <div className="col-12 col-lg-6 image-wrapper">
                    <div className="mbr-img-wrap" style={{ ...styles.img, backgroundImage: `url(${company.imageUrl})` }}>
                      {/* <img src={company.imageUrl} alt={company.imageUrl} style={styles.img} /> */}
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="text-wrapper">
                      <p className="mbr-section-text mbr-fonts-style mbr-white display-7 text-justify">
                      {company.description} 
                      </p>
                      <div className="mbr-section-bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

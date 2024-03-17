import React from "react";

const Home = () => {
  return (
    <>
      {/* -----------hero section--------- */}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* ----------hero content--------- */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                    We help patients live a healthy, longer life.
                  </h1>
                  <p className="text_para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Necessitatibus quidem quisquam natus placeat alias magnam
                    optio culpa repellendus eum unde? Eius reiciendis corrupti
                    beatae ad animi a nesciunt sit accusantium!
                  </p>
                  <button className="btn">Request an appointment</button>
                </div>
                {/* ----------hero-counter------- */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      30+
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block "></span>
                    <p className="text_para">Years of Experience</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      15+
                    </h2>
                    <span className="w-[100px] h-2 bg-purpleColor rounded-full block "></span>
                    <p className="text_para">Client Location</p>
                  </div>

                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100%
                    </h2>
                    <span className="w-[100px] h-2 bg-yellowColor rounded-full block "></span>
                    <p className="text_para">Paient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Home;

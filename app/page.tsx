/* eslint-disable no-unused-vars */

'use client'

import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, [])

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('geceviciusvejas@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  const handleCopyDiscord = async () => {
    try {
      await navigator.clipboard.writeText('justnaikis');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy Discord:', error);
    }
  };

  const handleCopyMessenger = async () => {
    try {
      await navigator.clipboard.writeText('Vejas Gecevicius');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy Messenger:', error);
    }
  };
  return (
    <main className="">
      <section className='lg:bg-bannerImg bg-phoneBannerImg bg-no-repeat bg-cover bg-bottom h-screen w-full'>
        <div className='md:w-2/3'>
          <div className="font-bold text-white md:w-1/2 w-full md:text-5xl text-3xl flex justify-center items-center h-screen">
            <div className='text-center mt-48 lg:mt-0'>
              <span className=''>
                <div className='text-transparent bg-clip-text bg-gradient-to-r from-darkBlu to-lightBlu'>
                  Sveiki, aš{" "}
                </div>
                <TypeAnimation
                  className='flex text-center'
                  sequence={[
                    "Vėjas",
                    1000,
                    "Būsimas",
                    500,
                    'Aušros prezidentas',
                    1000,
                  ]}
                  wrapper='span'
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <div className="p-4 pt-8 pl-8 pr-8">
        <div data-aos="fade-up" className='text-center md:text-4xl text-2xl font-bold text-mainText'>
          Šiek tiek apie mane
        </div>
        <br />
        <div data-aos="fade-up" className='text-mainText'>
        Esu asmuo, tikintis inovacijomis ir bendruomenės galia. Man svarbu nuolat mokytis ir tobulėti – programavimo įgūdžiai bei domėjimasis verslumu padeda man kūrybiškai mąstyti ir spręsti problemas. Manau, kad lyderystėje itin svarbu gebėti atsižvelgti į kitų nuomonę, būti atviram naujoms idėjoms ir kurti aplinką, kurioje kiekvienas jaučiasi svarbus. Atsakomybė ir pagarba visų nuomonėms man yra prioritetas, todėl tikiu, kad drauge galime sukurti įdomesnę ir inovatyvesnę mokyklą
        </div>
        <br />
        <br />
        <div data-aos="fade-up" className='text-center md:text-4xl text-2xl font-bold text-mainText'>
          Mano tikslai mokykloje
        </div>
        <br />
        <div data-aos="fade-up" className='pb-8 text-mainText'>
          Tapęs mokyklos prezidentu, sieksiu įgyvendinti kelis svarbius pokyčius, kurie pagerins mūsų mokyklos gyvenimą. Pirmiausia planuoju skaitmenizuoti balsavimo procesą – tai leis mokiniams patogiai ir greitai išreikšti savo nuomonę įvairiais klausimais, skatins skaidrumą ir sąžiningą sprendimų priėmimą. Taip pat stengsiuosi glaudžiai bendradarbiauti su mokinių savivaldos taryba, kad galėtume kurti mokyklą geresnę vietą visiems. Organizuosiu atvirų durų dienas, kurios suteiks mokiniams galimybę pristatyti mūsų mokyklą ir taip prisidėti prie jos reputacijos gerinimo. Siekdamas praturtinti mokyklos gyvenimą, skatinsiu įvairias popamokines veiklas, kurios leis mokiniams ugdyti savo gebėjimus, atrasti naujus interesus ir stiprinti bendruomenės ryšius. Taip pat planuoju pakviesti alumnus (buvusius gimnazijos mokinius), kad jie galėtų pasidalinti savo patirtimi ir padėti mokiniams pasirinkti tinkamą karjeros kelią. Sieksiu pagerinti ir esamų renginių kokybę, kad jie labiau atitiktų daugumos norus. Galiausiai žadu atsižvelgti į daugumos poreikius bei norus ir stengtis juos įgyvendinti – man svarbu, kad kiekvienas jaustųsi išgirstas ir dalyvautų mokyklos gyvenime.
        </div> 
        <br />
      </div>
      <div className="w-full bg-bottom">
        <div className='font-bold text-2xl md:text-3xl text-cream text-center'>
          Susisiek su manimi
        </div>
        <br />
        <div className="md:text-xl text-md grid sm:grid-rows-3 md:grid-cols-3 text-coral">
          <div className='flex justify-center font-bold'>
            Gmail: {" "}
            <span className="ml-2 cursor-pointer font-normal" onClick={handleCopyEmail}>
              geceviciusvejas@gmail.com
            </span>
          </div>
          <div className='flex justify-center font-bold'>
            Discord: {" "}
            <span className="ml-2 cursor-pointer font-normal" onClick={handleCopyDiscord}>
              Justnaikis
            </span>
          </div>
          <div className='flex justify-center font-bold'>
            Messenger: {" "}
            <span className="ml-2 cursor-pointer font-normal" onClick={handleCopyMessenger}>
              Vejas Gecevicius
            </span>
          </div>
        </div>
        <br />
      </div>
    </main>
  );
}

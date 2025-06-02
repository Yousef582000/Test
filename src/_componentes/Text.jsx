import React from "react";
import Image from "next/image";

import image1 from "../../public/images/email.png";
import image2 from "../../public/images/lock.png";
import image3 from "../../public/images/sheild.png";
import image4 from "../../public/images/warning.png";

import leftImage from "../../public/images/right-blocks.png";
import rightImage from "../../public/images/leftblocks.png";

import star from "../../public/images/star.png";
import e from "../../public/images/email2.png";
import v from "../../public/images/v.png";
import arrow from "../../public/images/arrow.png";

// مكون بطاقة نظرة عامة
const OverviewCard = ({ image, title, description }) => (
  <div className="text-one w-full sm:w-[48%] lg:w-[22%] h-auto">
    <div className="w-full flex items-end py-7">
      <Image src={image} alt={title} />
    </div>
    <h3 className="my-3.5 font-bold text-xl text-center">{title}</h3>
    <p className="text-sm text-center">{description}</p>
  </div>
);

const Text = () => {
  return (
    <div className="w-full pb-5 relative" dir="rtl">
   
      <Image className="absolute -z-10 left-0 top-0" src={leftImage} alt="left-bg" />
      <Image className="absolute -z-10 right-0 top-0" src={rightImage} alt="right-bg" />

    
      <div className="container mx-auto text-center">
        <h1 className=" text-lg lg:text-6xl text-blue-950 font-bold">
          نظرة شاملة على نطاقك بالكامل
        </h1>
        <p className="mt-2 text-sm">
          احصل على رؤية كاملة لكل ما يحدث في نطاقك على لوحة تحكم واحدة، <br />
          وتعمّق في أدق التفاصيل من خلال الرسوم البيانية التفاعلية وعناصر واجهة المستخدم.
        </p>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center gap-4 py-8">
        <OverviewCard
          image={image3}
          title="التوافق مع منصة PowerDMARC"
          description="النسبة المئوية لرسائل البريد الإلكتروني المرسلة من نطاقك والتي تتوافق مع PowerDMARC."
        />
        <OverviewCard
          image={image2}
          title="التوافق مع أنظمة ​​SPF & DKIM"
          description="النسبة المئوية لرسائل البريد الإلكتروني التي تتوافق مع SPF و DKIM."
        />
        <OverviewCard
          image={image4}
          title="أكبر 5 تهديدات"
          description="إظهار أكثر 5 عناوين IP التي تشكل أكبر التهديدات المحتملة لنطاقك."
        />
        <OverviewCard
          image={image1}
          title="نظرة عامة على البريد الإلكتروني الصادر"
          description="عرض نسبة رسائل البريد الإلكتروني التي تمر عبر DMARC."
        />
      </div>

      <h2 className="text-center text-2xl lg:text-5xl text-blue-950 font-bold">
        لماذا تختارنا
      </h2>

    <section >
        <div className="container mx-auto py-24 grid grid-cols-1 lg:grid-cols-2 gap-6">
    
        <div className="h-auto py-14 hover:scale-105 cursor-pointer hover:shadow-blue-500 transition-all rounded-2xl bg-white shadow-2xl p-8 mx-5">
          <div className="flex w-full items-end  mb-4">
            <Image src={star} alt="تعزيز العلامة التجارية" />
          </div>
          <h2 className="text-xl text-dark font-bold text-right">
            عزز صورة علامتك التجارية
          </h2>
          <p className="text-right mt-6">
            عندما تقوم باستخدام PowerDMARC، فإنك لا تقضي على عمليّات انتحال البريد الإلكتروني فحسب،
            بل يمكنك أيضًا استخدام التقارير التفصيلية لتغيير استراتيجية المحتوى الخاصة بك على الفور.
            لا تترك مجالًا للصدفة.
          </p>
        </div>

        <div className="h-auto py-14 hover:scale-105 cursor-pointer hover:shadow-blue-500 transition-all rounded-2xl bg-white shadow-2xl p-8 mx-5">
          <div className="flex items-end mb-4">
            <Image src={e} alt="حظر البريد غير المصرح" />
          </div>
          <h2 className="text-xl text-dark font-bold text-right">
            حظر البريد الإلكتروني غير المصرح به
          </h2>
          <p className="text-right mt-6">
            يقوم PowerDMARC باستخدام القوة المشتركة لتقنيتي SPF و DKIM ليوفر لك حماية لا مثيل لها للبريد الإلكتروني.
            مع إمكانية الحصول على نتائج رسائل البريد الإلكتروني التي فشلت في المصادقة حتى تتمتع بالتحكم الكامل.
          </p>
        </div>

        <div className="h-auto py-14 hover:scale-105 cursor-pointer hover:shadow-blue-500 transition-all rounded-2xl bg-white shadow-2xl p-8 mx-5">
          <div className="flex items-end mb-4">
            <Image src={v} alt="مراقبة التهديدات" />
          </div>
          <h2 className="text-xl text-dark font-bold text-right">
            مراقبة التهديدات في الوقت الفعلي
          </h2>
          <p className="text-right mt-6">
            باستخدام محرك استخبارات التهديدات المعتمد على الذكاء الاصطناعي،
            يمكنك تتبع المصادر الضارة التي تنتحل اسم نطاقك أينما كانت في العالم.
          </p>
        </div>


        <div className="h-auto py-14 hover:scale-105 cursor-pointer hover:shadow-blue-500 transition-all rounded-2xl bg-white shadow-2xl p-8 mx-5">
          <div className="flex items-end mb-4">
            <Image src={arrow} alt="تحسين التسليم" />
          </div>
          <h2 className="text-xl text-dark font-bold text-right">
            تحسين إمكانية التسليم
          </h2>
          <p className="text-right mt-6">
            تطبيق PowerDMARC يوضّح للمُخدّمات المتلقية أنك ملتزم بتحسين أمان بريدك الإلكتروني،
            مما يزيد من احتمالية وصول بريدك الإلكتروني إلى صناديق البريد الوارد للأشخاص المستهدفين.
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Text;

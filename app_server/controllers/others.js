// const formm = text.split('..');
const about = (req, res) =>{
    res.render('about', { title: 'About RNP Drug Store',
    pageTitle: 'RNP Drug Store',
    pageHeader: {
      title: 'About',
    },
    info:{
    eng: "RNP Drug Store is your trusted neighborhood pharmacy, dedicated to serving the health and wellness needs of our community. Our experienced pharmacists are here to provide expert guidance on medications and healthcare products. We take pride in our commitment to customer care, ensuring you have a seamless and personalized experience. At RNP Drug Store, we strive to offer a wide range of pharmaceutical services, from prescription fulfillment to over-the-counter solutions, all in a friendly and welcoming environment. Your well-being is our priority, and we look forward to being your healthcare partner.",
    hin: "RNP ड्रग स्टोर आपकी विश्वासपूर्ण पड़ोस की फार्मेसी है, जो हमारे समुदाय की स्वास्थ्य और वेलनेस की आवश्यकताओं की सेवा करने के लिए समर्पित है। हमारे अनुभवी फार्मासिस्ट यहाँ हैं ताकि आपको दवाओं और स्वास्थ्य संबंधित उत्पादों पर विशेषज्ञ मार्गदर्शन प्रदान करें। हम ग्राहक देखभाल के हमारे प्रतिबद्धीता पर गर्व करते हैं, जिससे आपको एक बिना किसी खिचक से और व्यक्तिगत अनुभव मिले। RNP ड्रग स्टोर पर हम विभिन्न प्रकार की फार्मास्यूटिकल सेवाएँ प्रदान करने का प्रयास करते हैं, प्रिस्क्रिप्शन फुलफिलमेंट से लेकर काउंटर पर उपलब्ध समाधानों तक, सभी कुछ एक दोस्ताना और स्वागतपूर्ण वातावरण में। आपका भलाइ हमारी प्राथमिकता है, और हम आपके स्वास्थ्य संबंधी साथी बनने के लिए तत्पर हैं।",
    chi: "RNP药店是您信赖的社区药店,致力于为我们社区的健康和健康需求提供服务.我们经验丰富的药剂师在这里为您提供有关药物和医疗保健产品的专业指导.我们以对客户关怀的承诺为傲,确保您拥有无缝和个性化的体验.在RNP药店,我们努力提供广泛的药学服务,从处方配药到非处方解决方案,一切都在友好和热情的环境中进行.您的健康是我们的首要任务,我们期待成为您的医疗保健合作伙伴."
    }
});
};

  module.exports =  {
      about
  };
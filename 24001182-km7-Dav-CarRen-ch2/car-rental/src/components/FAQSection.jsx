import FAQAccordion from "./FAQAccordion";

const FAQSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:flex md:items-start md:justify-between md:mx-20">
        {/* Text Section */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">Frequently Asked Question</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="md:w-1/2">
          <FAQAccordion />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

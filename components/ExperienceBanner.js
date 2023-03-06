import { motion } from "framer-motion";
import { CustomContainer } from "../components/CustomContainer";
import { opacityAnimation } from "../constants";

export const ExperienceBanner = () => {
  return (
    <motion.section
      id="where-i-worked"
      className="shadow-xl bg-dark-blue-900"
      {...opacityAnimation}
    >
      <CustomContainer className="py-10 md:py-12 lg:py-14 xl:py-16">
        <h2 className="flex items-center justify-center mb-8 text-3xl md:text-4xl xl:text-5xl font-semibold text-gray-100">
          03+
          <span
            className="ml-2 text-sm md:text-base xl:text-lg text-left text-gray-100"
            style={{ lineHeight: 1 }}
          >
            years of
            <br />
            experience
          </span>
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-lg md:text-xl leading-relaxed font-medium">
          <img
            src="/images/paytrack.svg"
            alt="Paytrack logo"
            className="w-32 md:w-36 xl:w-40"
          />
          <img
            src="/images/philips.svg"
            alt="Philips logo"
            className="w-32 md:w-36 xl:w-40"
          />
          <img
            src="/images/autokeet.svg"
            alt="Autokeet logo"
            className="w-32 md:w-36 xl:w-40"
          />
          <img
            src="/images/white-logo.svg"
            alt="My logo"
            className="w-32 md:w-36 xl:w-40"
          />
        </div>
      </CustomContainer>
    </motion.section>
  );
};

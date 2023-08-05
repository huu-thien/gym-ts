import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { SelectedPage, BenefitType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
type PropsType = {
  setSelectedPage: (value: SelectedPage) => void;
};

const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 2-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboredebitis asperiores maiores omnis fugit, deleniti, ab porro iustodicta nulla eum dolores non cum rem voluptas vel molestias modifuga?",
  },
  {
    icon: <UserGroupIcon className="h-6 2-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboredebitis asperiores maiores omnis fugit, deleniti, ab porro iustodicta nulla eum dolores non cum rem voluptas vel molestias modifuga?",
  },
  {
    icon: <AcademicCapIcon className="h-6 2-6" />,
    title: "Expert and Pro Trainer",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboredebitis asperiores maiores omnis fugit, deleniti, ab porro iustodicta nulla eum dolores non cum rem voluptas vel molestias modifuga?",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = ({ setSelectedPage }: PropsType) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
            debitis asperiores maiores omnis fugit, deleniti, ab porro iusto
            dicta nulla eum dolores non cum rem voluptas vel molestias modi
            fuga?
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="md:flex items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType, index: number) => (
            <Benefit
              key={`${benefit.title}-${index}`}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHIC AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            src={BenefitsPageGraphic}
            alt="benefit-graphic"
            className="mx-auto"
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILIONS OF HAPPY MEMBER GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati nesciunt labore qui repellat quod rerum similique
                saepe blanditiis excepturi, commodi laboriosam accusantium
                reiciendis perspiciatis, nam rem consectetur! Nulla, tenetur
                quos?
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati nesciunt labore qui repellat quod rerum similique
                saepe blanditiis excepturi, commodi laboriosam accusantium
                reiciendis perspiciatis, nam rem consectetur! Nulla, tenetur
                quos?
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

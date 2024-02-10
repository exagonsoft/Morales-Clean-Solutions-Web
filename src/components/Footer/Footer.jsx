import { Langs } from "@/langs/langs";
import "./footerstyles.css";
import { SiFacebook, SiTwitter, SiWhatsapp, SiLinkedin } from "react-icons/si";
import { NavLinks, SystemVariables } from "@/settings/constants";
import { Link } from "react-scroll";
import Estimator from "../Estimator/Estimator";
import Exagonsoft_logo from "../Reusable/exagonsoft_logo";
import Next_logo from "../Reusable/next_logo";

const FooterLink = ({ text, link, onSelected, textColor = "text-white" }) => {
  return (
    <Link
      to={link}
      spy={true}
      smooth={true}
      className="nav-link cursor-pointer"
      onClick={() => onSelected(text)}
    >
      <span className={`${textColor} font-bold`}>{text}</span>
    </Link>
  );
};

const Footer = ({ inMobile, selectedSection, handleSectionSelection }) => {
  return (
    <section id="footer" className="w-full mt-8">
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center items-center px-4 py-12 bg-[--color-secondary] text-white">
          <div className="w-full flex flex-col gap-4 justify-center items-center">
            <div className="flex sm:flex-row flex-col w-full justify-between items-center py4 sm:gap-0 gap-6">
              <div className="w-full flex items-center sm:justify-start justify-center sm:mb-[-8rem] mb-0">
                <FooterLink
                  link="#Home"
                  text={
                    <img
                      src="/logo.webp"
                      alt="MHS"
                      className="w-[100px] h-[100px] rounded-full self-center"
                      loading="lazy"
                    />
                  }
                  onSelected={() => handleSectionSelection("")}
                  className=""
                ></FooterLink>
              </div>
              <div className="w-full flex justify-center items-center gap-8 social-links">
                <a
                  href={SystemVariables.facebookLink}
                  aria-label="Follow us in Facebook"
                  target="blank"
                >
                  <SiFacebook />
                </a>
                <a
                  href={SystemVariables.twitterLink}
                  aria-label="Follow us in Twitter"
                  target="blank"
                >
                  <SiTwitter />
                </a>
                <a
                  href={SystemVariables.whatsappLink}
                  aria-label="Contact us over WhatsApp"
                  target="blank"
                >
                  <SiWhatsapp />
                </a>
                <a
                  href={SystemVariables.linkedInLink}
                  aria-label="Find us in LinkedIn"
                  target="blank"
                >
                  <SiLinkedin />
                </a>
              </div>
              <div className="w-full flex items-center sm:justify-end justify-center sm:mb-[-8rem] mb-0">
                <Estimator />
              </div>
            </div>
            <div className="footer-links-container text-center justify-center items-center sm:gap-8 gap-2">
              <FooterLink
                link="#Home"
                text={"Home"}
                onSelected={() => handleSectionSelection("")}
                className=""
              ></FooterLink>
              {NavLinks.map((link, index) => (
                <FooterLink
                  key={index}
                  text={link.text}
                  link={link.link}
                  onSelected={handleSectionSelection}
                  textColor={
                    selectedSection === link.text
                      ? "text-[var(--color-primary)]"
                      : "text-white"
                  }
                />
              ))}
            </div>
            <div className="flex flex-col gap-2 items-center mt-4 rounded-lg px-4 py-2 border border-solid border-gray-300">
              <div className="">
                <span className="">Powered By</span>
              </div>
              <div className="flex gap-8 items-center">
                <a
                  href="https://main.d401teswsrn9u.amplifyapp.com"
                  target="blank"
                  title="EXAGON-SOFT Landing Page"
                >
                  <Exagonsoft_logo width="120px" height="40px"/>
                </a>
                <a href="https://nextjs.org" target="blank" title="Next js Landing Page">
                  <Next_logo width="120" height="40"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-center p-4 bg-[--color-primary]">
          <div className="w-full flex justify-center items-center">
            <span className=" text-center">
              {Langs["en"].globalUI.footerSlogan}
            </span>
          </div>
          <div className="w-full flex justify-center items-center">
            <span className="text-center font-bold">{`Marcos Haul Solutions 2002-${new Date().getFullYear()} | © All Rights Reserved`}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

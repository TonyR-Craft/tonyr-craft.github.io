import { FiMail } from "react-icons/fi";
import Layout from "../../components/Layout/Layout";
import HomeButton from "../../components/Navigation/HomeButton";

const Contact = () => {
  return (
    <>
      <HomeButton />
      <div className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <Layout>
            <h1 className="text-accent font-semibold text-center text-4xl capitalize">
              Enter the Circle of Wonders
            </h1>
            <p className="text-center font-light text-sm xs:text-base">
              Let your words dance upon the threads of the cosmos. Whether you
              wish to conjure collaborations, unravel mysteries, or share tales
              of grand adventures, your messages are cherished scrolls within
              this enchanted realm. Use the form below to send your missives
              through the ethereal winds, and await the magical whispers that
              will return to you.
            </p>
            <br />
            <p>Click on one of the totems below:</p>
            <div className="flex justify-center items-center">
              <a
                href="https://www.github.com/tonyr-craft"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="m-2"
                  src={`https://skillicons.dev/icons?i=github`}
                  loading="lazy"
                  key={"github"}
                />
              </a>
              <a
                href="mailto:anr635@yahoo.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiMail className="size-10" />
              </a>
              <a
                href="https://www.codewars.com/users/RType64"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="m-2" src="/icons/codewars.png" />
              </a>
            </div>
          </Layout>
        </div>
      </div>
    </>
  );
};

export default Contact;

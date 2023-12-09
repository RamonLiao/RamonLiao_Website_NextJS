import Image from "next/image";
import styles from "@/styles/about.module.css";

export default function About() {
  const web3Imgs = [
    { name: "Solidity", img: "icons8-solidity.svg" },
    { name: "Hardhat", img: "hardhat.svg" },
    { name: "Ethers.js", img: "ethers.svg" },
    { name: "Wagmi", img: "wagmish.svg" },
    { name: "RainbowKit", img: "rainbow.svg" },
    { name: "NFT", img: "nft-logo.svg" },
  ];

  const frontEndImgs = [
    { name: "HTML5", img: "icons8-html-5.svg" },
    { name: "CSS3", img: "icons8-css3.svg" },
    { name: "JavaScript", img: "icons8-javascript.svg" },
    { name: "TypeScript", img: "icons8-typescript.svg" },
    { name: "Tailwind CSS", img: "Tailwind_CSS_Logo.svg" },
    { name: "React.js", img: "icons8-react-native.svg" },
    { name: "Next.js", img: "icons8-nextjs.svg" },
    { name: "Redux", img: "redux.svg" },
  ];

  const backEndImgs = [
    { name: "Node.js", img: "icons8-nodejs.svg" },
    { name: "MongoDB", img: "icons8-mongodb.svg" },
    { name: "SQL", img: "sql-database-sql-azure.svg" },
  ];

  const testImgs = [
    { name: "mocha", img: "mocha.svg" },
    { name: "chai", img: "chai.svg" },
  ];

  const othersImgs = [
    { name: "SAP ERP", img: "icons8-sap.svg" },
    { name: "Python", img: "icons8-python.svg" },
    { name: "Git", img: "icons8-git.svg" },
  ];

  const eduInfos = [
    {
      id: "1",
      school: "University of Leeds",
      degree: "MSc, Business Analytics and Decision Sciences",
      country: "UK",
      year: "2021-2022",
    },
    {
      id: "2",
      school: "National Chung Hsing University",
      degree: "BSc, Civil Engineering",
      country: "Taiwan",
      year: "2012-2017",
    },
    {
      id: "3",
      school: "National Chung Hsing University",
      degree: "BSc (Hons), Electrical Engineering",
      country: "Taiwan",
      year: "2015-2017",
    },
  ];

  const languages = [
    { name: "English", level: "Fluently" },
    { name: "Chinese", level: "Native" },
    { name: "Spanish", level: "Beginner" },
  ];

  return (
    <>
      <main className={styles.main}>
        <section className={styles.table}>
          <div className={styles.container}>
            <table>
              <tbody>
                {/* Experiences */}
                <tr>
                  <td>
                    <p className={styles.aboutCategories}>Experiences</p>
                  </td>
                  <td>
                    <ul className={styles.listGroup}>
                      <li>
                        <p className={styles.roleName}>
                          Associate System Analyst
                        </p>
                        <p className={styles.roleInfo}>
                          Full-Time, Taiwan, Sep 2020 - Nov 2021
                        </p>
                        <ul className={styles.subListGroup}>
                          <li>
                            Synthesised technical customisations based on
                            clients&apos; demands to develop business
                            specifications
                          </li>
                          <li>
                            Managed 2 development projects, achieving savings of
                            up to 20% on human resources for system development
                          </li>
                          <li>
                            Organised 2 cross-functional meetings and proposed
                            new business solutions to CEO and vice presidents
                            monthly
                          </li>
                          <li>
                            Developed a full-stack automation program to help
                            customers simplify the 4 actions into one-click
                            completion
                          </li>
                          <li>
                            Experienced in building RESTful APIs for data
                            exchange between clouds and frontend servers
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p className={styles.roleName}>Back-End Dveloper</p>
                        <p className={styles.roleInfo}>
                          Full-Time, Taiwan, Nov 2018 - Sep 2021
                        </p>
                        <ul className={styles.subListGroup}>
                          <li>
                            Enhanced SQL and programming architectures to
                            optimise a cost-and-inventory report by 70%
                          </li>
                          <li>
                            Designed and organised 3 technical courses about
                            full-end techniques to teach new members from
                            scratch to intermediate
                          </li>
                          <li>
                            Developed a template of interfaces for ERP-banking
                            system integration, saving 1/3 development time
                          </li>
                          <li>
                            Created 6 ERP platforms enabling clients to improve
                            invoicing, inventory ledger, distributions, finance
                            and cost, shares, and treasury bonds
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* Core Skills */}
                <tr>
                  <td>
                    <p className={styles.aboutCategories}>Core Skills</p>
                  </td>
                  <td className={styles.skillsGroup}>
                    <ul>
                      <li>
                        <p>Front-end</p>
                        <div>
                          {frontEndImgs.map((img) => (
                            <figure key={img.name}>
                              <Image
                                src={`./Icons/${img.img}`}
                                title={img.name}
                                alt={img.name}
                                width={48}
                                height={48}
                              />
                              <figcaption>{img.name}</figcaption>
                            </figure>
                          ))}
                        </div>
                      </li>
                      <li>
                        <p>Back-end</p>
                        <div>
                          {backEndImgs.map((img) => (
                            <figure key={img.name}>
                              <Image
                                src={`./Icons/${img.img}`}
                                title={img.name}
                                alt={img.name}
                                width={48}
                                height={48}
                              />
                              <figcaption>{img.name}</figcaption>
                            </figure>
                          ))}
                        </div>
                      </li>
                      <li>
                        <p>Testing</p>
                        <div>
                          {testImgs.map((img) => (
                            <figure key={img.name}>
                              <Image
                                src={`./Icons/${img.img}`}
                                title={img.name}
                                alt={img.name}
                                width={48}
                                height={48}
                              />
                              <figcaption>{img.name}</figcaption>
                            </figure>
                          ))}
                        </div>
                      </li>
                      <li>
                        <p>Web3</p>
                        <div>
                          {web3Imgs.map((img) => (
                            <figure key={img.name}>
                              <Image
                                src={`./Icons/${img.img}`}
                                title={img.name}
                                alt={img.name}
                                width={48}
                                height={48}
                              />
                              <figcaption>{img.name}</figcaption>
                            </figure>
                          ))}
                        </div>
                      </li>
                      <li>
                        <p>Others</p>
                        <div>
                          {othersImgs.map((img) => (
                            <figure key={img.name}>
                              <Image
                                src={`./Icons/${img.img}`}
                                title={img.name}
                                alt={img.name}
                                width={48}
                                height={48}
                              />
                              <figcaption>{img.name}</figcaption>
                            </figure>
                          ))}
                        </div>
                      </li>
                    </ul>
                  </td>
                </tr>
                {/* Education */}
                <tr>
                  <td>
                    <p className={styles.aboutCategories}>Education</p>
                  </td>
                  <td className={styles.eduGroup}>
                    <ul>
                      {eduInfos.map((info) => (
                        <li key={info.id}>
                          <span className={styles.uniSubject}>
                            {info.degree}
                          </span>
                          <br />
                          <span className={styles.uniInfo}>
                            {info.school}, {info.country} {info.year}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
                {/* Languages */}
                <tr>
                  <td>
                    <p className={styles.aboutCategories}>Languages</p>
                  </td>
                  <td className={styles.langGroup}>
                    <ul>
                      {languages.map((lang) => (
                        <li key={lang.name}>
                          <span className={styles.langName}>{lang.name}: </span>
                          <span className={styles.langLevel}>{lang.level}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
                {/* Interests */}
                <tr>
                  <td>
                    <p className={styles.aboutCategories}>Interests</p>
                  </td>
                  <td className={styles.intsGroup}>
                    <p>Reading, Workout, Investment, Blockchain, Web3</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.picture}>
          <Image
            src="/images/TravelPic2.JPG"
            alt="travel pic"
            width={144}
            height={200}
          />
          <div className={styles.orangeRect}></div>
        </section>
      </main>
    </>
  );
}

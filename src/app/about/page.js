import Image from "next/image";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <>
      <main className={styles.main}>
        <section className={styles.table}>
          <table>
            <tbody>
              <tr style={{ "border-top": "2px solid gray" }}>
                <td style={{ width: "20%" }}>Experiences</td>
                <td style={{ width: "80%" }}>
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
                          Synthesised technical customisations based on clients'
                          demands to develop business specifications
                        </li>
                        <li>
                          Managed 2 development projects, achieving savings of
                          up to 20% on human resources for system development
                        </li>
                        <li>
                          Organised 2 cross-functional meetings and proposed new
                          business solutions to CEO and vice presidents monthly
                        </li>
                        <li>
                          Developed a full-stack automation program to help
                          customers simplify the 4 actions into one-click
                          completion
                        </li>
                        <li>
                          Experienced in building RESTful APIs for data exchange
                          between clouds and frontend servers
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
                          Enhanced SQL and programming architectures to optimise
                          a cost-and-inventory report by 70%
                        </li>
                        <li>
                          Designed and organised 3 technical courses about
                          full-end techniques to teach new members from scratch
                          to intermediate
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
              <tr>
                <td>Core Skills</td>
                <td className={styles.skillsGroup}>
                  <ul>
                    <li>
                      <p>Front-end</p>
                      <div>
                        <figure>
                          <Image
                            src="./Icons/icons8-html-5.svg"
                            title="HTML5"
                            alt="HTML5"
                            width={48}
                            height={48}
                          />
                          <figcaption>HTML5</figcaption>
                        </figure>
                        <figure>
                          <Image
                            src="./Icons/icons8-css3.svg"
                            title="CSS3"
                            alt="CSS"
                            width={48}
                            height={48}
                          />
                          <figcaption>CSS3</figcaption>
                        </figure>
                        <figure>
                          <Image
                            src="./Icons/icons8-javascript.svg"
                            title="JavaScript"
                            alt="JavaScript"
                            width={48}
                            height={48}
                          />
                          <figcaption>JavaScript</figcaption>
                        </figure>
                        <figure>
                          <Image
                            src="./Icons/icons8-react-native.svg"
                            title="React"
                            alt="React"
                            width={48}
                            height={48}
                          />
                          <figcaption>React.js</figcaption>
                        </figure>
                        <figure>
                          <Image
                            src="./Icons/icons8-nextjs.svg"
                            title="Next.js"
                            alt="Next.js"
                            width={48}
                            height={48}
                          />
                          <figcaption>Next.js</figcaption>
                        </figure>
                      </div>
                    </li>
                    <li>
                      <p>Back-end</p>
                      <div>
                        <figure>
                          <Image
                            src="./Icons/icons8-nodejs.svg"
                            title="Node.js"
                            alt="Node.js"
                            width={48}
                            height={48}
                          />
                          <figcaption>Node.js</figcaption>
                        </figure>
                        <figure>
                          <Image
                            src="./Icons/icons8-mongodb.svg"
                            title="MongoDB"
                            alt="MongoDB"
                            width={48}
                            height={48}
                          />
                          <figcaption>MongoDB</figcaption>
                        </figure>
                        <figure>
                          <Image
                            src="./Icons/sql-database-sql-azure.svg"
                            title="SQL"
                            alt="SQL"
                            width={48}
                            height={48}
                          />
                          <figcaption>SQL</figcaption>
                        </figure>
                      </div>
                    </li>
                    <li>
                      <p>Others</p>
                      <div>
                        <figure>
                          <Image
                            src="./Icons/icons8-sap.svg"
                            title="SAP"
                            alt="SAP"
                            width={48}
                            height={48}
                          />
                          <figcaption>SAP ERP</figcaption>
                        </figure>
                        <figure>
                          <Image
                            src="./Icons/icons8-python.svg"
                            title="Python"
                            alt="Python"
                            width={48}
                            height={48}
                          />
                          <figcaption>Python</figcaption>
                        </figure>
                        <figure>
                          <Image
                            src="./Icons/icons8-git.svg"
                            title="Git"
                            alt="Git"
                            width={48}
                            height={48}
                          />
                          <figcaption>Git</figcaption>
                        </figure>
                      </div>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Education</td>
                <td>
                  <ul>
                    <li>
                      MSc, Business Analytics and Decision Sciences <br />
                      <span className={styles.uniInfo}>
                        University of Leeds, UK 2021-2022
                      </span>
                    </li>
                    <li>
                      BSc, Civil Engineering <br />
                      <span className={styles.uniInfo}>
                        National Chung Hsing University, Taiwan 2012-2017
                      </span>
                    </li>
                    <li>
                      BSc (Hons), Electrical Engineering <br />
                      <span className={styles.uniInfo}>
                        National Chung Hsing University, Taiwan 2015-2017
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Languages</td>
                <td>
                  <ul>
                    <li>English: Fluently</li>
                    <li>Chinese: Native</li>
                    <li>Spanish: Beginner</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <td>Interests</td>
                <td>Reading, Workout, Investment, Blockchain</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.picture}>
          <Image
            src="/images/TravelPic2.jpg"
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

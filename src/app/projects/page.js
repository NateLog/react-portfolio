import styles from "./projects.module.css";

function Projects() {
  return (
    <div className={styles.shortTextWrapper}>
      <h1>A history of everyone who lived for 200 years</h1>
      <p>
        I am currently remaking an interactive version of Hans Rosling's graph
        of the history of everyone who has ever lived since 1800. My favourite
        graph by one of my favourite humans.
      </p>
      <p>
        Here is a link to a short film with Hans Rosling:{" "}
        <a
          href="https://www.youtube.com/watch?v=jbkSRLYSojo&ab_channel=BBC"
          target="_blank"
        >
          Please watch
        </a>{" "}
        :-)
      </p>
      <p>
        For a large part of my life so far, I worked for Medecins Sans
        Frontieres. A fantastic charity looking to close the gap of the poor and
        sick to the rich and healthy.
      </p>
      <p>
        I'm a great believer in data communication. Through understanding data,
        we can empower ourselves by understanding how far we have come and
        create robust plans for what we can do next.
      </p>
      <p>
        This graph will need to be dynamic, operate seemlessly and intuitively.
        I look forward to people using it and I hope you come back!
      </p>
    </div>
  );
}
export default Projects;

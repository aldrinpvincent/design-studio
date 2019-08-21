import Header from "../header";
import Menu from "../menu";
import GithubCorner from "../github-corner";

const Layout = props => (
  <main>
    <Header />
    <section className="container">
      <GithubCorner />
      <Menu />
      {props.children}
    </section>
    <style jsx>{`
      .container {
        display: flex;
      }
    `}</style>
  </main>
);

export default Layout;

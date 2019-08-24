import Header from "../header";
import Menu from "../menu";

const Layout = props => (
  <main>
    <Header />
    <section className="container">
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

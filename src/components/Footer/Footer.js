import { Container } from "react-bootstrap";
function Footer() {
  return (
    <footer
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      className="text-center"
      bg="dark"
      variant="dark"
    >
      <Container className="p-4">
        <section className="mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
          facere architecto magni? Expedita, nostrum ex!
        </section>
      </Container>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright
      </div>
    </footer>
  );
}

export default Footer;

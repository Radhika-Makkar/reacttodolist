function ContactCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.phone}</h2>
    </div>
  );
}

export default ContactCard;

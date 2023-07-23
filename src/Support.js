import { useState } from "react";

const Support = () => {
  const [language, setLanguage] = useState("English");
  const faqs = [
    [
      "How can I get in touch with Customer Happiness?",
      "Our Customer Happiness team is based out of our Toronto, Canada head office with partial support available through our offices in Nottingham, UK and Melbourne, Australia. The team’s hours of service are Monday to Friday from 9:30 AM to 5 PM EST (excluding holidays). We have limited support available on the weekends.",
      "Comment puis-je entrer en contact avec Customer Happiness ?",
      "Notre équipe Customer Happiness est basée à notre siège social de Toronto, au Canada, avec une assistance partielle disponible via nos bureaux à Nottingham, au Royaume-Uni et à Melbourne, en Australie. Les heures de service de l'équipe sont du lundi au vendredi de 9h30 à 17h00 HNE (hors jours fériés). Nous avons un support limité disponible le week-end.",
    ],
    [
      "When can I expect a response to my email?",
      "Our team is working very hard but we are experiencing very rapid growth at this time. While we are expanding our resources, our aim is to respond to all inquiries within 48 hours. Please note that our response times may vary during peak periods such as after product launches or promotions.",
      "Quand puis-je espérer une réponse à mon e-mail ?",
      "Notre équipe travaille très dur mais nous connaissons une croissance très rapide en ce moment. Alors que nous augmentons nos ressources, notre objectif est de répondre à toutes les demandes dans les 48 heures. Veuillez noter que nos délais de réponse peuvent varier pendant les périodes de pointe, comme après les lancements de produits ou les promotions.",
    ],
    [
      "Do you test on animals? Are your products cruelty-free?",
      "Brains&Beauty does not test on animals and does not ask others to do so. Brains&Beauty has been certified with the Leaping Bunny stamp of approval, a widely recognized standard for personal care and household products.",
      "Testez-vous sur les animaux ? Vos produits sont-ils sans cruauté ?",
      "Brains&Beauty ne teste pas sur les animaux et ne demande pas aux autres de le faire. Brains&Beauty a été certifié avec le sceau d'approbation Leaping Bunny, une norme largement reconnue pour les produits de soins personnels et ménagers.",
    ],
    [
      "Are your products vegan?",
      "Most Brains&Beauty products have been certified vegan by PETA, and we are currently obtaining certification for all other products. Until then, please refer to our legend for each product on our website that will indicate the specifications of any given product (for example, if it is vegan, nut-free, oil-free, etc.)",
      "Vos produits sont-ils vegan ?",
      "La plupart des produits Brains&Beauty ont été certifiés végétaliens par PETA, et nous obtenons actuellement la certification pour tous les autres produits. D'ici là, veuillez vous référer à notre légende pour chaque produit sur notre site Web qui indiquera les spécifications d'un produit donné (par exemple, s'il est végétalien, sans noix, sans huile, etc.)",
    ],
    [
      "Can I cancel my order?",
      "Cancellations must be requested within 1 hour of the order being placed and within our service hours (Monday-Friday, 9:30 AM-5 PM EST/GMT). While we cannot guarantee cancellations, we will try our best to accommodate where possible. Please note, we have very limited support on weekends and public/bank holidays.",
      "Puis-je annuler ma commande ?",
      "Les annulations doivent être demandées dans l'heure suivant la commande et pendant nos heures de service (du lundi au vendredi, de 9h30 à 17h00 EST/GMT). Bien que nous ne puissions pas garantir les annulations, nous ferons de notre mieux pour nous adapter dans la mesure du possible. Veuillez noter que nous avons une assistance très limitée les week-ends et les jours fériés.",
    ],
    [
      "Can I change my shipping address on an order that's been placed?",
      "We are unable to update or amend shipping addresses once an order has been placed. If there is an error in your shipping address, we kindly recommend requesting a cancellation and placing a new order with the correct shipping address.",
      "Puis-je modifier mon adresse de livraison sur une commande qui a été passée ?",
      "Nous ne sommes pas en mesure de mettre à jour ou de modifier les adresses de livraison une fois qu'une commande a été passée. S'il y a une erreur dans votre adresse de livraison, nous vous recommandons de demander une annulation et de passer une nouvelle commande avec la bonne adresse de livraison.",
    ],
  ];
  const accordion = () => {
    const accordion_divs = [];
    faqs.forEach((faq, idx) => {
      accordion_divs.push(
        <div className="accordion-item">
          <h2 className="accordion-header" id={`heading${idx}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${idx}`}
              aria-expanded="true"
              aria-controls={`collapse${idx}`}
            >
              {language === "English" ? faq[0] : faq[2]}
            </button>
          </h2>
          <div
            id={`collapse${idx}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${idx}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {language === "English" ? faq[1] : faq[3]}
            </div>
          </div>
        </div>,
      );
    });
    return (
      <div className="accordion mt-4 mx-4" id="accordionExample">
        {accordion_divs}
      </div>
    );
  };

  const contact_form = () => {
    const reasons = [
      ["Product suggestions", "Suggestions de produits"],
      ["Question about product", "Question sur le produit"],
      ["Issues with order", "Problèmes avec la commande"],
      ["Order cancellation", "Annulation de commande"],
      ["Other", "Autre"],
    ];
    const reason_options = [];
    reasons.forEach((reason) => {
      const translated_reason = language === "English" ? reason[0] : reason[1];
      reason_options.push(
        <option value={translated_reason}>{translated_reason}</option>,
      );
    });

    const submit_form = () => {
      const first_name = document.querySelector("#first-name").value;
      const last_name = document.querySelector("#last-name").value;
      const email = document.querySelector("#email").value;
      const reason = document.querySelector("#reason").value;
      if (
        first_name !== "" &&
        last_name !== "" &&
        email !== "" &&
        reason !== ""
      ) {
        let message;
        if (language === "English") {
          message = `Thank you for contacting us ${first_name} ${last_name}. We will get back to you as soon as possible at the provided email address: ${email}.`;
        } else {
          message = `Merci de nous avoir contactés ${first_name} ${last_name}. Nous vous répondrons dans les plus brefs délais à l'adresse e-mail fournie : ${email}`;
        }
        alert(message);
        document.querySelector("#contact-form").reset();
      }
    };

    return (
      <form id="contact-form" className="mx-4">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              id="first-name"
              className="form-control"
              placeholder={language === "English" ? "First name" : "Prénom"}
              required
            />
          </div>
          <div className="col-6">
            <input
              type="text"
              id="last-name"
              className="form-control"
              placeholder={
                language === "English" ? "Last name" : "Nom de famille"
              }
              required
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder={language === "English" ? "Email" : "E-mail"}
              required
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="form-group col">
            <label for="reason">
              {language === "English"
                ? "Reason for contacting us"
                : "Raison de nous contacter"}
            </label>
            <select id="reason" className="form-select mt-2" required>
              <option selected></option>
              {reason_options}
            </select>
          </div>
        </div>
        <div className="row mt-4">
          <div className="form-group col">
            <label for="problem-description">Description</label>
            <textarea
              id="problem-description"
              className="form-control mt-2"
              rows="8"
              placeholder=""
            />
          </div>
        </div>
        <div className="col-auto mt-4 text-center">
          <button type="submit" className="submit-button" onClick={submit_form}>
            {language === "English" ? "Submit" : "Soumettre"}
          </button>
        </div>
      </form>
    );
  };

  const toggle_language = () => {
    setLanguage(language === "English" ? "Français" : "English");
  };

  return (
    <div>
      <div className="mt-3 me-4 text-end">
        <button className="btn btn-primary" onClick={toggle_language}>
          {language === "English" ? "Français" : "English"}
        </button>
      </div>
      <div>
        <h1 className="text-center">
          {language === "English"
            ? "Frequently Asked Questions"
            : "Questions fréquemment posées"}
        </h1>
        {accordion()}
      </div>
      <div id="contact-us">
        <h1 className="mt-5 mb-4 text-center">
          {language === "English" ? "Contact Us" : "Contactez-nous"}
        </h1>
        {contact_form()}
      </div>
    </div>
  );
};

export default Support;

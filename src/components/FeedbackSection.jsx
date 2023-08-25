import first from "../assets/images/profile-1.jpg";
import second from "../assets/images/profile-2.jpg";
import third from "../assets/images/profile-3.svg";
import Feedback from "./Feedback";
import bgQuotes from "../assets/images/bg-quotes.png";

const FeedbackSection = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Satish Patel",
      position: "Founder & CEO, Huddle",
      image: first,
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      id: 2,
      name: "Bruce McKenzie",
      position: "Founder & CEO, Huddle",
      image: second,
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
    {
      id: 3,
      name: "Iva Boyd",
      position: "Founder & CEO, Huddle",
      image: third,
      text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    },
  ];

  return (
    <section className="container mx-auto max-md:px-6 pt-56 md:pb-80 max-md:pt-12 max-md:pb-56 relative">
      <img src={bgQuotes} alt="quotes" className="absolute top-48 left-0 max-md:left-7 max-md:top-3" />

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-10 relative z-10">
        {feedbacks.map((feedback) => (
          <Feedback key={feedback.id}>
            <Feedback.Text>{feedback.text}</Feedback.Text>

            <Feedback.ContainerInfo>
              <Feedback.ContainerInfo.Image src={feedback.image} />

              <Feedback.ContainerInfo.Info>
                <Feedback.ContainerInfo.Info.Name name={feedback.name} />
                <Feedback.ContainerInfo.Info.Position
                  position={feedback.position}
                />
              </Feedback.ContainerInfo.Info>
            </Feedback.ContainerInfo>
          </Feedback>
        ))}
      </div>
    </section>
  );
};

export default FeedbackSection;

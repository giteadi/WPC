import React from "react";
import styled, { keyframes, css } from "styled-components";

// Keyframe for cards coming from top to bottom horizontally
const moveFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
`;

// Keyframe for cards coming from bottom to top horizontally
const moveFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

// Custom Testimonial Card Styled Component with looping animation
const TestimonialCard = styled.div`
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.1); /* Subtle background */
  backdrop-filter: blur(15px);
  border-radius: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  animation: ${({ animation }) =>
    animation === "top-to-bottom"
      ? css`
          ${moveFromTop} 18s ease-in-out infinite
        `
      : css`
          ${moveFromBottom} 18s ease-in-out infinite
        `};

  /* Mobile-specific adjustments */
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1rem;
  }
`;

// Testimonial Text
const TestimonialText = styled.p`
  font-size: 1rem;
  color: black; /* Light gray for better contrast */
  line-height: 1.6;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Author Name
const AuthorName = styled.h3`
  font-size: 1.25rem;
  color: #10b981; /* Green for emphasis */
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// Author Position
const AuthorPosition = styled.p`
  font-size: 1rem;
  color: #fbbf24; /* Gold accent */
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Author Image
const AuthorImage = styled.div`
  width: 5rem;
  height: 5rem;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 4px solid #86efac; /* Lighter green border */

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
  }
`;

// Container for cards
const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;

  /* Mobile-specific adjustments */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

// Columns for cards
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    margin-bottom: 24px; /* Space between columns */
  }
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    margin-top: 24px; /* Space between columns */
  }
`;

// Testimonials Section Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Jane Doe",
      position: "CEO, Example Corp",
      text: "This service is absolutely amazing! I highly recommend it to anyone looking for quality and reliability.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "John Smith",
      position: "Marketing Director, XYZ Ltd.",
      text: "A game-changer for our business. The customer support is fantastic, and the results speak for themselves.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Mike Taylor",
      position: "Software Engineer",
      text: "I was skeptical at first, but after using this product, I can’t imagine going back. It’s truly a must-have!",
    },
    {
      image: "https://randomuser.me/api/portraits/women/47.jpg",
      name: "Anna Lee",
      position: "Product Manager, ABC Tech",
      text: "The features and design are incredible. It has improved our workflow drastically.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/48.jpg",
      name: "Mark Brown",
      position: "Designer",
      text: "The design is sleek and intuitive. A fantastic product all around!",
    },
    {
      image: "https://randomuser.me/api/portraits/women/49.jpg",
      name: "Sarah White",
      position: "Founder, StartUp Co.",
      text: "I can't imagine running our business without this. Truly invaluable!",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <h2 className="text-4xl font-bold text-green-500 mb-12">What Our Clients Say</h2>
      <CardsContainer>
        {/* Left Column (Top to Bottom) */}
        <LeftColumn>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} animation="top-to-bottom">
              <AuthorImage imgUrl={testimonial.image} />
              <TestimonialText>{testimonial.text}</TestimonialText>
              <AuthorName>{testimonial.name}</AuthorName>
              <AuthorPosition>{testimonial.position}</AuthorPosition>
            </TestimonialCard>
          ))}
        </LeftColumn>

        {/* Right Column (Bottom to Top) */}
        <RightColumn>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} animation="bottom-to-top">
              <AuthorImage imgUrl={testimonial.image} />
              <TestimonialText>{testimonial.text}</TestimonialText>
              <AuthorName>{testimonial.name}</AuthorName>
              <AuthorPosition>{testimonial.position}</AuthorPosition>
            </TestimonialCard>
          ))}
        </RightColumn>
      </CardsContainer>
    </div>
  );
};

export default TestimonialsSection;

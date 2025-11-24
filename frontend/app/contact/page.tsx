import Title from "@/src/components/Title/Title";
import ContactSection from "@/src/sections/ContactSection/ContactSection";
import MediaSection from "@/src/sections/MediaSection/MediaSection";

export default function Contact() {
  return (
    <main className="grid justify-stretch items-center">
      <Title title={"contacts"} subTitle={"Who am i?"} slash noLine className="title_contain" />
      <ContactSection noTitle />
      <MediaSection />
    </main>
  );
}

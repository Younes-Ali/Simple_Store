import FormConact from "../components/FormConact";
import HeroContact from "../components/HeroContact";


export default function Contact() {


  return (
    <div className="font-sans text-gray-900 bg-white">

      {/* Hero */}
      <HeroContact />

      {/* Content */}
      <FormConact />
    </div>
  );
}

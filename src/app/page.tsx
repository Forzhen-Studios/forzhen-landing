import Header from "./(components)/Header";
import Socials from "./(components)/socials";
import Title from "./(components)/title";
import NotifyButton from "./(components)/notify-button";
import Description from "./(components)/description";
import Footer from "./(components)/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center relative text-neutral-950 bg-neutral-50">
      <Header />
      <main className="flex flex-wrap lg:gap-52 gap-32  px-10 py-5 items-center justify-center">
        <div className="flex-1 flex flex-col py-10 justify-center lg:justify-start max-w-lg space-y-6 text-center lg:text-left mt-20 lg:mt-0">
          <Title />

          <Description />

          <NotifyButton />
        </div>

        <Socials />
      </main>

      <Footer />
    </div>
  );
}

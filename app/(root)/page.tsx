import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstname: "Muhammad" };
  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstname || "Guest"}
          subtext="Access and manage your account and transaction efficiently."
        />

        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={123.21}
        />
      </div>
    </section>
  );
};

export default Home;

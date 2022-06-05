import React from "react";
import Card from "./Card";

const ChallengeList = ({ challenges }) => {
  return (
    <section className="py-6 lg:py-10 mx-4">
      <h2 className="text-center font-semibold text-2xl my-8">Challenges</h2>
      <div className="max-w-screen-xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mx-auto">
        {challenges &&
          challenges.data.map((challenge) => (
            <Card key={challenge.id} data={challenge} />
          ))}
      </div>
    </section>
  );
};

export default ChallengeList;

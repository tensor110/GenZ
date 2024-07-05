import React from "react";
import '../../styles/TextGradient.css'
import Card from "../../components/Articles/Card";
import Heading from "../../components/General/Heading";
import Subline from "../../components/General/Subline";

function Articles() {
  return (
    <div className="px-[7.5%] pt-[6%] pb-[3%] flex flex-col gap-14">
      <div className="flex flex-col gap-2">
        <Heading className='text-5xl font-bold'>Featured Articles</Heading>
        <Subline>Discover the most outstanding articles in all topics</Subline>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Articles;

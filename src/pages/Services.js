import Service from "../components/Service";

const Services = () => {
  return (
    <div className="services-page">
      <h4> Our Services </h4>
      <div className="services-flex">
        <Service
          title="ROMANCE SCAM RECOVERY"
          imgpath="2"
          text="These days, layouts of Internet scams and romance scams have become
        increasingly complex: fake phone numbers, fake Whatsapp numbers, fake
        company websites, fake passport, fake real-time video calls, ETC
        According to the FBI IC3 figures, monetary loss in romance
        scams/confident fraud has doubled in only two years. (from $211M in 2017
        to $475M in 2019.) We help our clients in recovery of their loses,
        please note; Not all victims are able to recover full amount, but we
        could recover some assets which could be auctioned like watches, arts,
        etc."
        />
        <Service
          title="ASSET SEARCH AND RECOVERY"
          imgpath="5"
          text="Documentation of assets and possible transfers. Identify changes to asset class and dilution of value. Verification of any increase or decrease to net asset value of the entity or individual. Prepare reporting for seizure or writ of garnishment."
        />
        <Service
          title="CRYPTOCURRIENCIES SCAM RECOVEFRY"
          imgpath="8"
          text="Recover funds from forgotten wallet passwords. Recover funds lost in fork cork. Recover funds in watch only addresses. Reverse cryptocurrencies transferred to an invalid address. We help recover funds lost in cryptocurrency investment/seed scams."
        />
        <Service
          title="WIRE AND ACH FRAUD RECOVERY"
          imgpath="9"
          text="Has your firm mistakenkly sent funds to a wrong person via wire or ach and the banks told you its gone? Well they lied, it can be recovered with our resources, as every fund moved leaves a digital footprint, we gtrace that and recover back your funds or most of it. "
        />
        <Service
          title="EXPUNGED DATA EXTRACTION"
          imgpath="4"
          text="When someone wants to hide something, they delete the data. This information can be recovered, but attempting to do so without the proper training and tools can result in the data being rendered invalid as legal evidence, or even becoming permanently lost. Recover deleted call logs, IM conversations, track movements with geo-tagging. Gather data from personal computers, phone or other devices."
        />
        <Service
          title="VERIFICATIONS"
          imgpath="3"
          text="Has someone provided you with a business proposal that seemed too good to be true? Or met someone online which you dont trust? We can help verify them and their intentions before losses emotionaly or materially are made."
        />
        <Service
          title="LOCATE MISSING PERSON"
          imgpath="7"
          text="We help in locating hard to find subjects, missing persons, and those avoiding discovery. Reveal the activities and whereabouts of those concealing their identity or hiding their location. Services prepare a report of records and documentation of subjects activities, court testimony available by a licensed investigative agent."
        />
        <Service
          title="PRIVATE INVESTIGATIONS"
          imgpath="6"
          text="We help carry out our clients ethical needs, like spouses suspecting their patner is cheating on them etc. We have a team fully equipped and distance is not a barrier for us."
        />
        <Service
          title="NFT RECOVERY"
          imgpath="14"
          text="As NFTs poppularity go on a rise, so as scammers fed on it too, we help our clients to recover NFT related scams and give detailed advices before they proceed to buy"
        />
      </div>
    </div>
  );
};

export default Services;

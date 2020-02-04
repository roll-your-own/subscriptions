import React from "react";
import { useParams } from "react-router-dom";
import { usePlan } from "../Plans";
import { Loader, Message } from "../UI";
import {
  centsToCurrency,
  nextBillingDate,
  pluralizeInterval
} from "../../utils";

export const Subscribe = ({ dbUser }) => {
  const { id } = useParams();
  const { loading, message, plan } = usePlan(id);

  if (loading) {
    return <Loader inline />;
  }
  return (
    <div className="subscribe" data-testid="route-plan">
      {!!message && <Message type={message.type} message={message.message} />}
      <h2>{plan.name}</h2>
      <h3 style={{ paddingTop: 0 }}>
        {centsToCurrency(plan.amount)} {plan.currency} every{" "}
        {plan.intervalCount > 1 ? plan.intervalCount : null}{" "}
        {pluralizeInterval(plan.interval, plan.intervalCount)}
      </h3>

      <p>
        Next billing date:{" "}
        {nextBillingDate(
          plan.startDate,
          plan.intervalCount,
          plan.interval
        ).format("MMMM Do, YYYY")}
      </p>
    </div>
  );
};

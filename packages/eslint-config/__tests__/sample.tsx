import React from "react";

interface Props {
    title: string;
}

const Sample = ({ title }: Props) => <h1>Hello {title}!</h1>;

export default Sample;

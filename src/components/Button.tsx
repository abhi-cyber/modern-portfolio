import Link from "next/link";
import React from "react";

function Button({ text, link, download }: { text: string; link: string; download?: boolean }) {
  return (
    <Link className="btn" href={link} download={download}>
      {text}
    </Link>
  );
}

export default Button;
import { useEffect, useState } from "react"

const ONE_SECOND_IN_MS = 1000;

const Timer = () => {

  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setValue(currentValue => currentValue + 1),
      ONE_SECOND_IN_MS
    );

    return () => clearInterval(interval);
  }, [])

  return <span className="bg-red-200 p-3 font-semibold">{value}</span>;

}

export default Timer

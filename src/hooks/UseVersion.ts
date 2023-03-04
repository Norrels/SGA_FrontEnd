import axios from "axios";
import { useEffect, useState } from "react";

export function useVersion() {
  const [version, setVersion] = useState("");

  async function fetchCurrentVersion() {
    const { data } = await axios.get(
      "https://raw.githubusercontent.com/Norrels/SGA_FrontEnd/master/package.json"
    );
    setVersion(data.version);
  }

  useEffect(() => {
    fetchCurrentVersion();
    const interval = setInterval(() => {
      fetchCurrentVersion();
      console.log("nova requisição");
    }, 2 * 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return version;
}

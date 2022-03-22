import { useState } from "react";
import Link from "next/link";

import { SearchButton, SearchInput, SearchBar } from "./styles";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
const { Search } = Input;

const MissionSearch: React.FunctionComponent = () => {
  const [input, setInput] = useState("");

  const redirect = (e: any) => {
    if (e.key === "Enter") {
      SubmitButton.click();
    }
  };

  let SubmitButton = null;
  return (
    <div>
      <SearchBar>
        <SearchInput
          placeholder="Find Launches by Name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={redirect}
        />

        <Link
          href={input ? "/launches/[searchid]" : "/launches"}
          as={input ? `/launches/${input}` : "/launches"}>
          <SearchButton
            ref={(ele) => (SubmitButton = ele)}
            onClick={() => setInput("")}
            type="primary"
            icon={<SearchOutlined />}>
            Search
          </SearchButton>
        </Link>
      </SearchBar>
    </div>
  );
};

export default MissionSearch;

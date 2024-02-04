import React, { useEffect, useState } from "react";

export default function TagButton({ name, id, tagList, setTagList }) {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const tempTags = { ...tagList };
    if (!isAdded) {
      delete tempTags[name];
    } else {
      tempTags[name] = true;
    }
    setTagList(tempTags);
  }, [isAdded]);

  return (
    <div className={`button-container ${isAdded && "added"}`}>
      <button type="button" onClick={() => setIsAdded(!isAdded)}>
        {name}
      </button>
      {isAdded && (
        <button type="button" onClick={() => setIsAdded(false)}>
          ×
        </button>
      )}
    </div>
  );
}

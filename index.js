class JSONL {
  static parse(string) {
    const jsonl = string
      .replace(/\n*$/, "")
      .split(/\n/)
      .map((json) => {
        return JSON.parse(json);
      });

    return jsonl;
  }

  static stringify(jsonl) {
    let jsonlString = "";

    jsonl.forEach((j) => {
      jsonlString += `${JSON.stringify(j)}\n`;
    });

    return jsonlString;
  }
}

module.exports = JSONL;

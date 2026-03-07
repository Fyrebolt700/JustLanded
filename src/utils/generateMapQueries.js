export function generateMapQueries(userData) {
  const queries = [];

  // Always useful
  queries.push("library");
  queries.push("community centre");

  // Religion-based places
  if (userData.religion) {
    const religion = userData.religion.toLowerCase();

    if (religion.includes("hindu")) queries.push("hindu temple");
    if (religion.includes("muslim") || religion.includes("islam")) queries.push("mosque");
    if (religion.includes("sikh")) queries.push("gurdwara");
    if (religion.includes("christian") || religion.includes("catholic")) queries.push("church");
    if (religion.includes("jewish")) queries.push("synagogue");
    if (religion.includes("buddhist")) queries.push("buddhist temple");
  }

  // Nationality-based food/community
  if (userData.nationality) {
    queries.push(`${userData.nationality} grocery store`);
    queries.push(`${userData.nationality} food`);
    queries.push(`${userData.nationality} community`);
  }

  // Children
  if (Array.isArray(userData.children)) {
    if (userData.children.includes("elementary")) {
      queries.push("elementary school");
    }
    if (userData.children.includes("middle")) {
      queries.push("middle school");
    }
    if (userData.children.includes("preschool")) {
      queries.push("preschool");
    }
  }

  // Daycare
  if (userData.needsDaycare) {
    queries.push("daycare");
    queries.push("childcare centre");
  }

  // Needs
  if (Array.isArray(userData.needs)) {
    if (userData.needs.includes("school")) {
      queries.push("school");
      queries.push("school registration");
      queries.push("school board office");
    }

    if (userData.needs.includes("doctor")) {
      queries.push("clinic");
      queries.push("walk-in clinic");
      queries.push("hospital");
    }

    if (userData.needs.includes("housing")) {
      queries.push("housing assistance");
      queries.push("settlement services");
      queries.push("newcomer centre");
    }

    if (userData.needs.includes("legal")) {
      queries.push("legal aid");
      queries.push("immigration lawyer");
    }
  }

  // Purpose/status
  if (userData.purpose?.toLowerCase() === "study") {
    queries.push("college");
    queries.push("university");
    queries.push("student services");
  }

  if (userData.status?.toLowerCase().includes("study")) {
    queries.push("international student office");
  }

  return [...new Set(queries)];
}
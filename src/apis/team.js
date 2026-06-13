export async function getTeam() {
  try {
    const baseUrl = String(import.meta.env.VITE_API_BASE_URL || "").replace(
      /\/+$/,
      ""
    );
    const res = await fetch(`${baseUrl}/v1/public/team`);
    if (!res.ok) return [];

    const payload = await res.json();
    if (Array.isArray(payload?.data)) return payload.data;
    if (Array.isArray(payload?.content)) return payload.content;
    return [];
  } catch (err) {
    console.error("team api error", err);
    return [];
  }
}

export function buildTeamImageUrl(filePath) {
  if (!filePath) return "";

  const normalizedPath = String(filePath).replace(/^\/+/, "");
  return `${import.meta.env.VITE_API_IMAGE_URL}${encodeURI(normalizedPath)}`;
}

export function normalizeApiTeamMember(member) {
  return {
    id: member.teamId,
    name: [member.honorific?.honorificTitle, member.teamName]
      .filter(Boolean)
      .join(" ")
      .trim(),
    roles: (member.designations || []).map(
      (designation) => designation.designationTitle
    ),
    img: buildTeamImageUrl(member.teamProfilePic),
    socials: [
      { platform: "twitter", link: member.teamTwitterLink || "" },
      { platform: "linkedin", link: member.teamLinkedInLink || "" },
      { platform: "facebook", link: member.teamFacebookLink || "" },
    ],
  };
}

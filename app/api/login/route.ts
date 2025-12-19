import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  const appPassword = process.env.APP_PASSWORD || "";
  const cookieName = process.env.APP_COOKIE_NAME || "vibe_app_auth";

  if (!appPassword) {
    return NextResponse.json(
      { error: "APP_PASSWORD not set" },
      { status: 500 }
    );
  }

  if (password !== appPassword) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });

  res.cookies.set(cookieName, appPassword, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });

  return res;
}

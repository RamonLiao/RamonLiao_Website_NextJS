import { NextResponse } from "next/server";
import Projects from "../projects.json";

export async function GET(request, { params }) {
  const id = params.id;
  //   const response = await fetch("./projects.json");
  //   const data = await res.json();
  const projectsArr = Projects.projects;
  const foundProject = projectsArr.filter((item) => item.id === id);

  return NextResponse.json(foundProject[0]);
}

// export async function GET(request: Request) {}

// export async function HEAD(request: Request) {}

// export async function POST(request: Request) {}

// export async function PUT(request: Request) {}

// export async function DELETE(request: Request) {}

// export async function PATCH(request: Request) {}

// // If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(request: Request) {}

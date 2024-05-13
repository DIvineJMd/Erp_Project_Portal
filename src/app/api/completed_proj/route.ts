import { NextRequest, NextResponse } from 'next/server';
import ProjectModel from '@/models/ProjectModel'
import { connect } from '@/dbConfig/dbConfig';

connect();

export async function POST(request: NextRequest) {
    try {
        // Extract the email from the request body
        const reqBody = await request.json();
        const { email } = reqBody;
        console.log(email);

        // Query the database to find projects where the provided email is either the owner or in the team
        const projects = await ProjectModel.find({
            'team.email': email,
            status: true
          });

        // Return the list of projects as a JSON response
        return NextResponse.json({ projects });
    } catch (error) {
        console.error('Error fetching projects:', error);
        // Return an error response if there's any issue with fetching projects
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}

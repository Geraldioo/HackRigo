import WishlistModel from "@/db/models/wishlists";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    try {
        const userId = request.headers.get('x-user-id');
        const body = await request.json();
        console.log(body, "<< IINI BODY");
        
        console.log(userId, "<<<< ID USER");
        if (!userId) {
            return NextResponse.json({
                message: 'User Not Found'
            }, {
                status : 404
            })
        }
    
        const { productId } = body; 
        console.log(productId, "ASDASDASDA");
        
        const wishlistItem = await WishlistModel.createWishlist(userId, productId);
        console.log(wishlistItem, "<< WISHLIST >>");
        
        return NextResponse.json({
            message: "Wishlist item added"
        }, {
            status: 201
        })    
    } catch (error) {
        console.log(error, "<<< ERROR DI WISHLIST >>>");

        return NextResponse.json({
            message: "Internal server error"
        },{
            status: 500
        })
    }
}

export const GET = async (request: Request): Promise<Response | NextResponse> => {
    try {
        const userId = request.headers.get('x-user-id');
        console.log(userId, "<<< USER ID >>>");
        if (!userId) {
            return NextResponse.json({
                message: 'User Not Found'
            }, {
                status : 404
            })
        }
        // const body = await request.json();
        // const { productId } = body; 

        const getWishlist = await WishlistModel.showWishlist(userId);

        return new Response(JSON.stringify(getWishlist), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        return NextResponse.json({
            message: "Internal Server Error"
        },{
            status: 500
        })
    }
    }

export const DELETE = async (request: Request) => {
    try {
        const userId = request.headers.get('x-user-id')
        if (!userId) {
            return NextResponse.json({
                message: 'User Not Found'
            }, {
                status : 404
            })
        }

        const body = await request.json();
        const {_id } = body
        const deleteWishlist = await WishlistModel.deleteWishlist(_id)

        return NextResponse.json({
            message: "Wishlist has been Deleted"
        }, {
            status: 200
        })
        
    } catch (error) {
        return NextResponse.json({
            message: "Internal server error"
        }, {
            status: 500
        })
    }
}
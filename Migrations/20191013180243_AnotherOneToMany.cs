using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class AnotherOneToMany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UsersId",
                table: "Boards",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Boards_UsersId",
                table: "Boards",
                column: "UsersId");

            migrationBuilder.AddForeignKey(
                name: "FK_Boards_Users_UsersId",
                table: "Boards",
                column: "UsersId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Boards_Users_UsersId",
                table: "Boards");

            migrationBuilder.DropIndex(
                name: "IX_Boards_UsersId",
                table: "Boards");

            migrationBuilder.DropColumn(
                name: "UsersId",
                table: "Boards");
        }
    }
}

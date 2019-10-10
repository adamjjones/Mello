using Microsoft.EntityFrameworkCore.Migrations;

namespace sdgreacttemplate.Migrations
{
    public partial class OneToMany : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BoardsId",
                table: "Cards",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Boards",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Cards_BoardsId",
                table: "Cards",
                column: "BoardsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cards_Boards_BoardsId",
                table: "Cards",
                column: "BoardsId",
                principalTable: "Boards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cards_Boards_BoardsId",
                table: "Cards");

            migrationBuilder.DropIndex(
                name: "IX_Cards_BoardsId",
                table: "Cards");

            migrationBuilder.DropColumn(
                name: "BoardsId",
                table: "Cards");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Boards");
        }
    }
}

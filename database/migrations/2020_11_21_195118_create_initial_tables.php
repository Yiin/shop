<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInitialTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('collections', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('name');
            $table->text('description');
        });
        
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            
            $table->string('name');
            $table->text('description');
        });

        Schema::create('collection_item', function (Blueprint $table) {
            $table->foreignId('collection_id')->constrained()
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreignId('item_id')->constrained()
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });

        Schema::create('variants', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            
            $table->foreignId('item_id')->constrained()
                ->onDelete('cascade')
                ->onUpdate('cascade');
            
            $table->string('name');
            $table->string('type');
        });
        
        Schema::create('sizes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            
            $table->foreignId('item_id')->constrained()
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->string('name');
        });
        
        Schema::create('prices', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('variant_id')->constrained()
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreignId('size_id')->constrained()
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->integer('price');
        });
        
        Schema::create('stocks', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('variant_id')->constrained()
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->foreignId('size_id')->constrained()
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->integer('amount');
        });

        Schema::create('images', function (Blueprint $table) {
            $table->id();

            $table->string('url');
            $table->integer('imageable_id');
            $table->string('imageable_type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('images');
        Schema::dropIfExists('inventory');
        Schema::dropIfExists('prices');
        Schema::dropIfExists('sizes');
        Schema::dropIfExists('variants');
        Schema::dropIfExists('items');
        Schema::dropIfExists('categories');
    }
}
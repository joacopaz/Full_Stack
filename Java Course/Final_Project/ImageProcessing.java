import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.File;
import java.net.URL;
import java.util.Arrays;
import java.util.Random;
import javax.imageio.ImageIO;
public class ImageProcessing {
	public static void main(String[] args) {
    // The provided images are apple.jpg, flower.jpg, and kitten.jpg
		int[][] imageData = imgToTwoD("./Original/kitten.jpg");
    // Or load your own image using a URL!
		//int[][] imageData = imgToTwoD("https://content.codecademy.com/projects/project_thumbnails/phaser/bug-dodger.png");
		//viewImageData(imageData);
		int[][] trimmed = trimBorders(imageData, 60);
		twoDToImage(trimmed, "./Productions/trimmed.jpg");
		// int[][] allFilters = stretchHorizontally(shrinkVertically(colorFilter(negativeColor(trimBorders(invertImage(imageData), 50)), 200, 20, 40)));
		// Painting with pixels

		// Getting a negative
    int[][] negative = negativeColor(imageData);
    twoDToImage(negative,"Productions/negative.jpg");
		// Stretching horizontally an image
    int[][] stretched = stretchHorizontally(imageData);
    twoDToImage(stretched,"./Productions/stretched.jpg");
		// Shrinking vertically an image
    int[][] shrink = shrinkVertically(imageData);
    twoDToImage(shrink,"./Productions/shrinked.jpg");
		// Inverting an image
    int[][] invert = invertImage(imageData);
    twoDToImage(invert,"./Productions/inverted.jpg");
		// Adding a color filter (RGB) modifier
    int[][] filter = colorFilter(imageData,200,-50,90);
    twoDToImage(filter,"./Productions/filtered.jpg");
	
		// Painting on a canvas 500x500 pxs
	int[][] canvas = new int[500][500];
	int[][] painting = paintRandomImage(canvas);
    twoDToImage(painting,"./Productions/random_painting.jpg");

		// Painting a rectangle
	int[][] rectangle = paintRectangle(new int[500][500], 400, 400, 50, 50, getColorIntValFromRGBA(new int[] {138,241,255,255}));
	twoDToImage(rectangle, "./Productions/rectangle.jpg");
		// This time I added the canvas as an initialized new 2D array in the parameters.

		// Generating random rectangles on an image and painting them
	int[][] randomRectangles = generateRectangles(new int[500][500], 10);
	twoDToImage(randomRectangles, "./Productions/randomRectangles.jpg");
		// This time I added the canvas as an initialized new 2D array in the parameters.
		twoDToImage(generateRectangles(generateCanvas(255, 255, 255, 500, 500),10),"./Productions/randomRectangles.jpg");


	}
	// Image Processing Methods
	public static int[][] trimBorders(int[][] imageTwoD, int pixelCount) {
		// Example Method
		if (imageTwoD.length > pixelCount * 2 && imageTwoD[0].length > pixelCount * 2) {
			int[][] trimmedImg = new int[imageTwoD.length - pixelCount * 2][imageTwoD[0].length - pixelCount * 2];
			for (int i = 0; i < trimmedImg.length; i++) {
				for (int j = 0; j < trimmedImg[i].length; j++) {
					trimmedImg[i][j] = imageTwoD[i + pixelCount][j + pixelCount];
				}
			}
			return trimmedImg;
		} else {
			System.out.println("Cannot trim that many pixels from the given image.");
			return imageTwoD;
		}
	}
	public static int[][] negativeColor(int[][] imageTwoD) {
		// TODO: Fill in the code for this method // DONE!
    int[][] negative = new int[imageTwoD.length][imageTwoD[0].length];
    for(int i=0;i<imageTwoD.length;i++){
      for(int j=0;j<imageTwoD[i].length;j++){
        int[] rgba = getRGBAFromPixel(imageTwoD[i][j]);
        rgba[0] = 255 - rgba[0];
        rgba[1] = 255 - rgba[1];
        rgba[2] = 255 - rgba[2];
        negative[i][j] = getColorIntValFromRGBA(rgba);
      }
    }

		return negative;
	}
	public static int[][] stretchHorizontally(int[][] imageTwoD) {
		// TODO: Fill in the code for this method // DONE!
    int[][] stretched = new int[imageTwoD.length][imageTwoD[0].length*2];
    for(int i=0;i<imageTwoD.length;i++){
      for(int j=0;j<imageTwoD[i].length;j++){
        int index = j*2;
        stretched[i][index] = imageTwoD[i][j];
        stretched[i][index+1] = imageTwoD[i][j];
      }}
		return stretched;
	}
	public static int[][] shrinkVertically(int[][] imageTwoD) {
		// TODO: Fill in the code for this method // DONE!
    int[][] shrinked = new int[imageTwoD.length/2][imageTwoD[0].length];
    for(int i=0;i<imageTwoD[0].length;i++){
      for(int j=0;j<imageTwoD.length-1;j+=2){
        int index = j/2;
        shrinked[index][i] = imageTwoD[j][i];
        shrinked[index][i] = imageTwoD[j][i];
      }}
    
		return shrinked;
	}
	public static int[][] invertImage(int[][] imageTwoD) {
		// TODO: Fill in the code for this method // DONE!
    int[][] inverted = new int[imageTwoD.length][imageTwoD[0].length];
    for(int i=0;i<imageTwoD.length;i++){
      for(int j=0;j<imageTwoD[i].length;j++){
        inverted[i][j] = imageTwoD[(imageTwoD.length-1)-i][(imageTwoD[i].length-1)-j];
      }
    }
		return inverted;
	}
	public static int[][] colorFilter(int[][] imageTwoD, int redChangeValue, int greenChangeValue, int blueChangeValue) {
		// TODO: Fill in the code for this method // DONE!
    int[][] filtered = new int[imageTwoD.length][imageTwoD[0].length];
    for(int i=0;i<imageTwoD.length;i++){
    for(int j=0;j<imageTwoD[i].length;j++){
        int[] rgba = getRGBAFromPixel(imageTwoD[i][j]);
        rgba[0] += redChangeValue;
        if(rgba[0]>255)rgba[0]=255;
        if(rgba[0]<0)rgba[0]=0; 
        rgba[1] += greenChangeValue;
        if(rgba[1]>255)rgba[1]=255;
        if(rgba[1]<0)rgba[1]=0; 
        rgba[2] += blueChangeValue;
        if(rgba[2]>255)rgba[2]=255;
        if(rgba[2]<0)rgba[2]=0; 
        filtered[i][j] = getColorIntValFromRGBA(rgba);
      }
    }
          return filtered;
    }
	// Painting Methods
	public static int[][] paintRandomImage(int[][] canvas) {
		// TODO: Fill in the code for this method // DONE!
		Random rand = new Random();
		for (int i = 0; i < canvas.length; i++) {
			for (int j = 0; j < canvas[i].length; j++) {
			int[] rgb = {rand.nextInt(256), rand.nextInt(256), rand.nextInt(256), 255};
			canvas[i][j] = getColorIntValFromRGBA(rgb);
			}
		}
		return canvas;
	}
	public static int[][] paintRectangle(int[][] canvas, int width, int height, int rowPosition, int colPosition, int color) {
		// TODO: Fill in the code for this method // DONE!
		for (int i = 0; i < canvas.length; i++) {
			for (int j = 0; j < canvas[i].length; j++) {
				if(i>=rowPosition && i<= rowPosition+width && j>=colPosition && j<=colPosition+height) canvas[i][j] = color;
				} 
			}
			return canvas;
		}
	public static int[][] generateRectangles(int[][] canvas, int numRectangles) {
		// TODO: Fill in the code for this method
		Random rand = new Random();
		for (int i = 0; i < numRectangles; i++) {
		int width = rand.nextInt(canvas[0].length);
		int height = rand.nextInt(canvas.length); 
		int rowPosition = rand.nextInt(canvas.length-height); 
		int columnPosition = rand.nextInt(canvas[0].length-width);
		int[] rgb = {rand.nextInt(256), rand.nextInt(256), rand.nextInt(256), 255};
		int color = getColorIntValFromRGBA(rgb);
		paintRectangle(canvas, width, height, rowPosition, columnPosition, color);
		}
		return canvas;
	}
	// Utility Methods
	public static int[][] imgToTwoD(String inputFileOrLink) {
		try {
			BufferedImage image = null;
			if (inputFileOrLink.substring(0, 4).toLowerCase().equals("http")) {
				URL imageUrl = new URL(inputFileOrLink);
				image = ImageIO.read(imageUrl);
				if (image == null) {
					System.out.println("Failed to get image from provided URL.");
				}
			} else {
				image = ImageIO.read(new File(inputFileOrLink));
			}
			int imgRows = image.getHeight();
			int imgCols = image.getWidth();
			int[][] pixelData = new int[imgRows][imgCols];
			for (int i = 0; i < imgRows; i++) {
				for (int j = 0; j < imgCols; j++) {
					pixelData[i][j] = image.getRGB(j, i);
				}
			}
			return pixelData;
		} catch (Exception e) {
			System.out.println("Failed to load image: " + e.getLocalizedMessage());
			return null;
		}
	}


	// I created this method from scratch to test out this new knowledge, it generates a canvas given a RGB values, heigth and width.
	public static int[][] generateCanvas(int R, int G, int B, int height, int width){
		int[][] canvas = new int[height][width];
		int[] rgb = {R,G,B,255};
		for (int i = 0; i < canvas.length; i++) {
			for (int j = 0; j < canvas[i].length; j++) {
				canvas[i][j] = getColorIntValFromRGBA(rgb);
			}
		}
		return canvas;
	}

	public static void twoDToImage(int[][] imgData, String fileName) {
		try {
			int imgRows = imgData.length;
			int imgCols = imgData[0].length;
			BufferedImage result = new BufferedImage(imgCols, imgRows, BufferedImage.TYPE_INT_RGB);
			for (int i = 0; i < imgRows; i++) {
				for (int j = 0; j < imgCols; j++) {
					result.setRGB(j, i, imgData[i][j]);
				}
			}
			File output = new File(fileName);
			ImageIO.write(result, "jpg", output);
		} catch (Exception e) {
			System.out.println("Failed to save image: " + e.getLocalizedMessage());
		}
	}
	public static int[] getRGBAFromPixel(int pixelColorValue) {
		Color pixelColor = new Color(pixelColorValue);
		return new int[] { pixelColor.getRed(), pixelColor.getGreen(), pixelColor.getBlue(), pixelColor.getAlpha() };
	}
	public static int getColorIntValFromRGBA(int[] colorData) {
		if (colorData.length == 4) {
			Color color = new Color(colorData[0], colorData[1], colorData[2], colorData[3]);
			return color.getRGB();
		} else {
			System.out.println("Incorrect number of elements in RGBA array.");
			return -1;
		}
	}
	public static void viewImageData(int[][] imageTwoD) {
		if (imageTwoD.length > 3 && imageTwoD[0].length > 3) {
			int[][] rawPixels = new int[3][3];
			for (int i = 0; i < 3; i++) {
				for (int j = 0; j < 3; j++) {
					rawPixels[i][j] = imageTwoD[i][j];
				}
			}
			System.out.println("Raw pixel data from the top left corner.");
			System.out.print(Arrays.deepToString(rawPixels).replace("],", "],\n") + "\n");
			int[][][] rgbPixels = new int[3][3][4];
			for (int i = 0; i < 3; i++) {
				for (int j = 0; j < 3; j++) {
					rgbPixels[i][j] = getRGBAFromPixel(imageTwoD[i][j]);
				}
			}
			System.out.println();
			System.out.println("Extracted RGBA pixel data from top the left corner.");
			for (int[][] row : rgbPixels) {
				System.out.print(Arrays.deepToString(row) + System.lineSeparator());
			}
		} else {
			System.out.println("The image is not large enough to extract 9 pixels from the top left corner");
		}
	}
}
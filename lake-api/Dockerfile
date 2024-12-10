# Step 1: Use a Python base image
FROM python:3.10-slim

# Step 2: Set environment variables to avoid writing .pyc files and to buffer output for better logging
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Step 3: Set the working directory in the container
WORKDIR /app

# Step 4: Copy the requirements.txt (or manually install the dependencies)
COPY requirements.txt /app/

# Step 5: Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Step 6: Copy the FastAPI app into the container
COPY . /app/

# Step 7: Expose the port FastAPI runs on
EXPOSE 8000

# Step 8: Command to run the app with Uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
